import Cart from "../assets/Images/cart.png";
import StarRating from "../components/StarRating";
import { useRef, useState, useEffect } from "react";
import { Form, useParams, useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "../hooks";
import { addItem } from "../../features/cartSlice";
import {
  LoadingContainer,
  Spinner,
} from "../assets/wrappers/HomepageProductsContainer";
import { useGetProductController } from "../modules/AllProductsPage/controllers/getSingleProductController";
import { useGetProductReviewsController } from "../modules/AllProductsPage/controllers/getProductReviewController";
import { useCreateReviewController } from "../modules/AllProductsPage/controllers/createReviewController";
import { IReview } from "../utils/types";

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.user);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return (
      <div className="p-10 text-center text-red-500">Invalid product ID.</div>
    );
  }

  /* ---------------------------- State ---------------------------- */
  const formRef = useRef<HTMLFormElement | null>(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [resetRating, setResetRating] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  /* ---------------------------- Controllers ---------------------------- */
  const {
    product,
    isLoading: productLoading,
    isError: productError,
  } = useGetProductController(id);

  const {
    reviews,
    isLoading: reviewsLoading,
    isError: reviewsError,
  } = useGetProductReviewsController(id);
  const { createReview, isLoading: reviewSubmitting } =
    useCreateReviewController(id);

  /* ---------------------------- Effects ---------------------------- */
  useEffect(() => {
    if (
      product &&
      (product.sizes?.length === 0 ||
        (product.sizes?.length === 1 && product.sizes[0] === "One size"))
    ) {
      setSelectedSize("One size");
    }
  }, [product]);

  /* ---------------------------- Handlers ---------------------------- */
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!product) return;

    const formData = new FormData(formRef.current!);
    const title = (formData.get("title") as string) || "";
    const comment = (formData.get("comment") as string) || "";
    const author = user?.fullName || "";

    if (!ratingValue) {
      toast.error("Please select a rating");
      return;
    }

    await createReview({
      product: product._id,
      title,
      comment,
      rating: ratingValue,
      author,
    });

    formRef.current?.reset();
    setRatingValue(0);
    setResetRating(true);
    setTimeout(() => setResetRating(false), 0);
  };

  const handleSizeSelect = (size: string) => setSelectedSize(size);
  const handleRatingSelect = (rating: number) => setRatingValue(rating);
  const handleShowMore = () => setShowMore((prev) => !prev);

  const handleAddToCart = () => {
    if (!product) return;

    if (!user) {
      toast.error("Please login before adding to cart");
      navigate("/login");
      return;
    }

    if (!selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    const cartItem = {
      productId: product._id,
      description: product.description,
      price: product.price,
      image: product.image,
      amount: 1,
      size: selectedSize,
    };

    dispatch(addItem(cartItem));
    toast.success("Item added to cart!");
  };

  /* ---------------------------- Loading / Error ---------------------------- */
  if (productLoading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  if (productError) {
    return (
      <div className="py-10 text-center text-red-600">
        Failed to load product details.
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-10 text-center text-red-600">No product found.</div>
    );
  }

  /* ---------------------------- Render ---------------------------- */
  return (
    <section className="w-[95%] lg:w-[90%] flex flex-col items-center mx-auto my-[30px] lg:my-[60px]">
      <div className="main w-full flex flex-col items-center custom-border rounded-[20px]">
        {/* ---------- Header ---------- */}
        <div className="top w-full flex flex-col lg:flex-row items-start lg:items-center justify-between px-[10px] py-[20px] lg:px-[50px] lg:py-[30px] border-b border-dashed border-[rgba(194,180,163,0.2)]">
          <div className="top-left">
            <h1 className="text-[23px] lg:text-[40px]">
              {product.description?.toUpperCase()}
            </h1>
            <p className="text-[14px] opacity-60 mt-[15px]">
              {product.fit || "Standard fit"}
              <span className="ml-[10px] bg-[#4caf50] px-[12px] py-[3px] lg:px-[15px] lg:py-[5px] rounded-[5px]">
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

        {/* ---------- Image ---------- */}
        <div className="images-container w-full flex items-center justify-center border-b border-dashed border-[rgba(194,180,163,0.2)]">
          {product.image ? (
            <img
              className="self-center max-w-[500px] min-w-[200px] lg:max-w-[700px] lg:min-w-[360px] m-[30px]"
              src={product.image}
              alt="product"
            />
          ) : (
            <div className="p-10 text-center opacity-50">
              No image available
            </div>
          )}
        </div>

        {/* ---------- Info Section ---------- */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 products-info">
          {/* ---------- Features ---------- */}
          <div className="features flex flex-col py-[20px] lg:py-[40px] custom-border">
            <h3 className="w-[65%] text-[24px] px-[15px] lg:px-[115px] mb-[20px]">
              Features
            </h3>
            {product.features?.length ? (
              <ul className="list-disc px-[24px] lg:px-[140px]">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-[14px] opacity-70 mb-[5px]">
                    {feature}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-[24px] opacity-50">No features listed.</p>
            )}
          </div>

          {/* ---------- Price & Sizes ---------- */}
          <div className="flex flex-col items-center justify-center custom-border">
            <div className="prices flex flex-col lg:flex-row items-start lg:items-center justify-around px-[18px] pt-[30px] lg:pt-[40px] w-full">
              <p className="mb-[15px]">
                ${product.price}
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

            {/* Sizes */}
            {product.sizes?.length > 0 && product.sizes[0] !== "One size" && (
              <div className="sizes border-t border-dashed border-[rgba(194,180,163,0.2)] px-[20px] py-[20px] lg:px-[30px] w-full mt-[40px]">
                <h4 className="mb-[20px]">Available Sizes:</h4>
                <div className="flex items-center w-full">
                  {product.sizes.map((size, index) => (
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
              </div>
            )}
          </div>

          {/* ---------- Add Review ---------- */}
          <div className="add-review w-full p-[15px] lg:p-[40px] custom-border">
            <Form
              ref={formRef}
              className="review-form w-[95%] lg:w-[80%] flex flex-col justify-center"
              onSubmit={handleFormSubmit}
            >
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
                disabled={reviewSubmitting}
              >
                {reviewSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          </div>

          {/* ---------- Reviews Section ---------- */}
          <div className="ratings-and-reviews w-full custom-border pt-[10px] lg:pt-[20px] flex flex-col">
            <h3 className="text-[22px] lg:text-[24px] mb-[20px] lg:mb-[45px] mt-[10px] text-center">
              Ratings & Reviews
            </h3>
            <div className="reviews mb-[20px]">
              <div className="total-reviews flex flex-col custom-border pb-[20px] items-center">
                <h1 className="text-[30px] m-3">{product.averageRating}</h1>
                <StarRating rating={product.averageRating} />
                <p>{product.numOfReviews} ratings</p>
              </div>

              {reviewsLoading ? (
                <LoadingContainer>
                  <Spinner />
                </LoadingContainer>
              ) : reviewsError ? (
                <p className="text-center ">
                  No Reviews found for this product
                </p>
              ) : reviews && reviews.length > 0 ? (
                reviews
                  .slice(0, showMore ? reviews.length : 2)
                  .map((review: IReview, index: number) => (
                    <div
                      key={index}
                      className="review flex flex-col items-center pb-[15px]"
                    >
                      <p className="font-bold author">{review.author}</p>
                      <p className="italic title">{review.title}</p>
                      <p className="text-center comment">{review.comment}</p>
                      <StarRating rating={review.rating} />
                    </div>
                  ))
              ) : (
                <p className="text-center opacity-60">No reviews found</p>
              )}
            </div>

            {reviews && reviews.length > 2 && (
              <button
                className="load-more bg-[#8d7d6a] w-[40%] lg:w-[25%] self-center text-white border-none px-[15px] py-[10px] rounded-[5px] cursor-pointer hover:bg-transparent"
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
