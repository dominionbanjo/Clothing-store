// import Wrapper from "../assets/wrappers/ProductPage";
import Cart from "../assets/Images/cart.png";
import StarRating from "../components/StarRating";
import { useRef, useState, useEffect } from "react";
import { Form, useParams, useNavigation, useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import { QueryClient, useQuery } from "@tanstack/react-query";
import customFetch from "../utils/customFetch";
import { IProduct, IReview } from "../utils/types";
import { toast } from "react-toastify";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../hooks";
import { addItem } from "../../features/cartSlice";
import {
  LoadingContainer,
  Spinner,
} from "../assets/wrappers/HomepageProductsContainer";

export const action =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const productId = data.product as string;

    try {
      await customFetch.post("/reviews", data);
      toast.success("Review added successfully");
      queryClient.invalidateQueries({
        queryKey: ["reviews", productId],
      });
      await queryClient.invalidateQueries({
        queryKey: ["product", productId],
      });
      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.msg);
        } else if (error.request) {
          toast.error("No response from server");
        } else {
          toast.error("Request error");
        }
      } else {
        toast.error("An unknown error occurred");
      }
      return error;
    }
  };

// Fetch a single product data
const fetchProduct = async (id: string): Promise<IProduct> => {
  const { data } = await customFetch.get(`/products/${id}`);
  return data.product;
};

// Fetch a single product's reviews
// const fetchReviews = async (id: string): Promise<IReview[]> => {
//   const { data } = await customFetch.get(`/reviews/${id}/review`);
//   return data.reviews;
// };
const fetchReviews = async (id: string): Promise<IReview[]> => {
  try {
    const { data } = await customFetch.get(`/reviews/${id}/review`);
    return data.reviews || [];
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return []; // Return empty array for 404 errors
    }
    throw error; // Re-throw other errors
  }
};

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.user);

  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error("Product ID is missing");
  }

  const formRef = useRef<HTMLFormElement | null>(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [resetRating, setResetRating] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();

  // Product query
  const {
    data: product,
    isLoading: productLoading,
    error: productError,
  } = useQuery<IProduct>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  // Reviews query
  const {
    data: reviews,
    isLoading: reviewsLoading,
    error: reviewsError,
  } = useQuery<IReview[]>({
    queryKey: ["reviews", id],
    queryFn: () => fetchReviews(id),
    staleTime: Infinity,
    retry: false,
  });

  useEffect(() => {
    if (
      product &&
      (product.sizes.length === 0 ||
        (product.sizes.length === 1 && product.sizes[0] === "One size"))
    ) {
      setSelectedSize("One size");
    }
  }, [product]);

  const handleFormSubmit = () => {
    const intervalId = setInterval(() => {
      if (navigation.state !== "submitting") {
        clearInterval(intervalId);

        if (formRef.current) {
          formRef.current.reset();
          setRatingValue(0);
          setResetRating(true);
          setTimeout(() => setResetRating(false), 0);
        }
      }
    }, 100);
  };

  const handleSizeSelect = (size: string) => setSelectedSize(size);
  const handleRatingSelect = (rating: number) => setRatingValue(rating);
  const handleShowMore = () => setShowMore((prev) => !prev);

  const handleAddToCart = () => {
    if (!product) return;

    if (user == null) {
      toast.error("Please login before adding to cart");
      navigate("/login");
      return;
    }
    if (selectedSize === "") {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    const cartItem = {
      productId: product._id,
      description: product.description,
      price: product.price,
      image: product.image,
      amount: 1,
      size: selectedSize || "One size",
    };

    dispatch(addItem(cartItem));
    toast.success("Item added to cart!");
  };

  if (productLoading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  if (productError) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="w-95% lg:w-[90%] flex flex-col items-center mx-auto my-[30px] lg:my-[60px]">
      <div className="main w-full flex flex-col items-center custom-border rounded-[20px]">
        <div className="top w-full flex flex-col lg:flex-row items-start lg:items-center justify-between px-[10px] py-[20px] lg:px-[50px] lg:py-[30px] border-b border-dashed border-[rgba(194,180,163,0.2)]">
          <div className="top-left">
            <h1 className="text-[23px] lg:text-[40px]">
              {product.description.toUpperCase()}
            </h1>
            <p className="text-[14px] opacity-60 mt-[15px]">
              {product.fit}{" "}
              <span className="ml-[5px] lg:ml-[20px] bg-[#4caf50] px-[12px] py-[3px] lg:px-[15px] lg:py-[5px] rounded-[3px] lg:rounded-[5px]">
                In stock
              </span>
            </p>
          </div>
          <div className="top-right">
            <button
              className="cart-btn flex items-center mt-[15px] px-[7px] py-[4px] lg:px-[13px] lg:py-[8px] custom-border rounded-[5px] lg:rounded-lg"
              onClick={handleAddToCart}
            >
              <img className="mr-[10px]" src={Cart} alt="cart icon" />
              Add To Cart
            </button>
          </div>
        </div>

        <div className="images-container w-full flex items-center justify-center border-b border-dashed border-[rgba(194,180,163,0.2)]">
          <img
            className="self-center  max-w-[500px] min-w-[200px] lg:max-w-[700px] lg:min-w-[360px] m-[30px]"
            src={product.image}
            alt="product"
          />
        </div>

        <div className="products-info grid grid-cols-1 lg:grid-cols-2 w-full">
          <div className="features flex flex-col py-[20px] lg:py-[40px]  custom-border">
            <h3 className="w-[65%] text-[24px] px-[15px] lg:px-[115px] mb-[20px]">
              Features
            </h3>
            <ul className="list-disc px-[24px] lg:px-[140px] ">
              {product.features.map((feature: string, index: number) => (
                <li className="text-[14px] opacity-70 mb-[5px]" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="price-and-sizes-container flex flex-col items-center justify-center custom-border">
            <div className="prices flex flex-col lg:flex-row items-start lg:items-center justify-around py-0 px-[18px] pt-[30px]  lg:pt-[40px] w-full">
              <p className="mb-[15px]">
                ${product.price}{" "}
                <span className="opacity-60 text-[14px] ml-[5px] lg:ml-[15px]">
                  (MRP incl. of all taxes)
                </span>
              </p>
              <button
                className="cart-btn flex items-center px-[7px] py-[4px] lg:px-[13px] lg:py-[8px] custom-border rounded-[5px] lg:rounded-lg"
                onClick={handleAddToCart}
              >
                <img src={Cart} alt="cart icon" />
                Add To Cart
              </button>
            </div>

            <div className="sizes  border-t border-dashed border-[rgba(194,180,163,0.2)] px-[20px] py-[20px] lg:px-[30px] w-full mt-[40px]">
              {product.sizes.length === 0 ||
              product.sizes[0] === "One size" ? null : (
                <>
                  <h4 className="mb-[20px] lg:mb-[20px]">Available Sizes:</h4>
                  <div className="size-con w-full flex items-center">
                    {product.sizes.map((size: string, index: number) => (
                      <div
                        key={index}
                        className={`size bg-[#262626] w-[65px] h-[35px] mr-[20px] rounded-[10px] flex items-center justify-center cursor-pointer ${
                          selectedSize === size ? "selected" : ""
                        }`}
                        onClick={() => handleSizeSelect(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="add-review w-full p-[15px] lg:p-[40px] custom-border">
            <Form
              id="review-form"
              method="post"
              ref={formRef}
              className="review-form w-[95%] lg:w-[80%] flex flex-col justify-center"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="product" value={product._id} />
              <input type="hidden" name="rating" value={ratingValue} />
              <input type="hidden" name="author" value={user?.fullName || ""} />
              <h3 className="mb-[15px] text-[25px]">Leave a review</h3>
              <FormRow
                className="mb-[25px] flex justify-between"
                type="text"
                name="title"
                labelText="Review title:"
              />
              <FormRow
                className="mb-[25px] flex justify-between"
                type="text"
                name="comment"
                labelText="Comments:"
              />
              <div className="star-div flex items-center justify-between w-[90%] sm:w-[70%] lg:w-[60%]">
                <p>Give a rating: </p>
                <StarRating
                  resetRating={resetRating}
                  onRatingSelect={handleRatingSelect}
                />
              </div>
              <button
                type="submit"
                className="w-[40%] lg:w-[25%] p-[10px] mt-[20px] rounded-[5px] border-none self-center bg-[#8d7d6a]"
              >
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
            </Form>
          </div>

          <div className="ratings-and-reviews w-full custom-border pt-[10px] lg:pt-[20px] flex flex-col">
            <h3 className="text-[22px] lg:text-[24px] mb-[20px] lg:mb-[45px] mt-[10px] text-center">
              Ratings & Reviews
            </h3>
            <div className="reviews mb-[20px]">
              <div className="total-reviews  flex flex-col custom-border pb-[20px] items-center">
                <h1 className="text-[30px] m-3">{product.averageRating}</h1>
                <StarRating rating={product.averageRating} />
                <p>{product.numOfReviews} ratings</p>
              </div>

              <h3 className="mb-[15px] mt-[10px] text-center text-[28px]">
                Reviews
              </h3>
              {reviewsLoading ? (
                <LoadingContainer>
                  <Spinner />
                </LoadingContainer>
              ) : reviewsError ? (
                // Check if error is 404 (not found)
                axios.isAxiosError(reviewsError) &&
                reviewsError.response?.status === 404 ? (
                  <p>No reviews available for this product</p>
                ) : (
                  <p>Error loading reviews</p>
                )
              ) : reviews && reviews.length > 0 ? (
                reviews
                  .slice(0, showMore ? reviews.length : 2)
                  .map((review, index) => (
                    <div
                      className="review flex flex-col items-center pb-[15px] "
                      key={index}
                    >
                      <p className="author font-bold">{review.author}</p>
                      <p className="title italic">{review.title}</p>
                      <p className="comment text-center">{review.comment}</p>
                      <StarRating rating={review.rating} />
                    </div>
                  ))
              ) : (
                <p className="text-center">No reviews found</p>
              )}
            </div>
            {reviews && reviews.length > 2 && (
              <button
                className="load-more bg-[#8d7d6a] w-[40%] lg:w-[25%] self-center text-white border-none px-[15px] py-[10px] rounded-[5px] cursor-pointer hover:bg-transparent "
                onClick={handleShowMore}
              >
                {showMore ? "Show Less" : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
