import Wrapper from "../assets/wrappers/ProductPage";
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
    <Wrapper>
      <div className="main">
        <div className="top">
          <div className="top-left">
            <h1>{product.description.toUpperCase()}</h1>
            <p>
              {product.fit} <span>In stock</span>
            </p>
          </div>
          <div className="top-right">
            <button className="cart-btn" onClick={handleAddToCart}>
              <img src={Cart} alt="cart icon" />
              Add To Cart
            </button>
          </div>
        </div>

        <div className="images-container">
          <img src={product.image} alt="product" />
        </div>

        <div className="products-info">
          <div className="features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="price-and-sizes-container">
            <div className="prices">
              <p>
                ${product.price} <span>(MRP incl. of all taxes)</span>
              </p>
              <button className="cart-btn">
                <img src={Cart} alt="cart icon" onClick={handleAddToCart} />
                Add To Cart
              </button>
            </div>

            <div className="sizes">
              {product.sizes.length === 0 ||
              product.sizes[0] === "One size" ? null : (
                <>
                  <h4>Available Sizes:</h4>
                  <div className="size-con">
                    {product.sizes.map((size: string, index: number) => (
                      <div
                        key={index}
                        className={`size ${
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

          <div className="add-review">
            <Form
              id="review-form"
              method="post"
              ref={formRef}
              className="review-form"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="product" value={product._id} />
              <input type="hidden" name="rating" value={ratingValue} />
              <input type="hidden" name="author" value={user?.fullName || ""} />
              <h3>Leave a review</h3>
              <FormRow type="text" name="title" labelText="Review title:" />
              <FormRow type="text" name="comment" labelText="Comments:" />
              <div className="star-div">
                <p>Give a rating: </p>
                <StarRating
                  resetRating={resetRating}
                  onRatingSelect={handleRatingSelect}
                />
              </div>
              <button type="submit">
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
            </Form>
          </div>

          <div className="ratings-and-reviews">
            <h3>Ratings & Reviews</h3>
            <div className="reviews">
              <div className="total-reviews">
                <h1>{product.averageRating}</h1>
                <StarRating rating={product.averageRating} />
                <p>{product.numOfReviews} ratings</p>
              </div>

              <h3>Reviews</h3>
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
                    <div className="review" key={index}>
                      <p className="author">{review.author}</p>
                      <p className="title">{review.title}</p>
                      <p className="comment">{review.comment}</p>
                      <StarRating rating={review.rating} />
                    </div>
                  ))
              ) : (
                <p>No reviews found</p>
              )}
            </div>
            {reviews && reviews.length > 2 && (
              <button className="load-more" onClick={handleShowMore}>
                {showMore ? "Show Less" : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductPage;
