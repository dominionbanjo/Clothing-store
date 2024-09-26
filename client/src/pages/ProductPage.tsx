import Wrapper from "../assets/wrappers/ProductPage";
import Cart from "../assets/Images/cart.png";
import Image from "../assets/Images/ProductImage.png";
import StarRating from "../components/StarRating";
import { useState } from "react";
import { Form } from "react-router-dom";
import FormRow from "../components/FormRow";

const Product = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const reviews = [
    {
      author: "John",
      title: "Good Product",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      rating: 4,
    },
    {
      author: "Jane",
      title: "Excellent!",
      comment: "Great quality and fit. Highly recommend!",
      rating: 5,
    },
    {
      author: "Alice",
      title: "Satisfactory",
      comment: "Meets expectations, but could improve.",
      rating: 3,
    },
    {
      author: "Bob",
      title: "Not what I expected",
      comment: "The fabric feels cheap.",
      rating: 2,
    },
    {
      author: "Charlie",
      title: "Perfect!",
      comment: "Absolutely love this dress!",
      rating: 5,
    },
    {
      author: "Dave",
      title: "Very nice",
      comment: "Looks good, but runs a bit small.",
      rating: 4,
    },
  ];

  const handleRatingSelect = (rating: number) => {
    setRatingValue(rating);
  };

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Wrapper>
      <div className="main">
        <div className="top">
          <div className="top-left">
            <h1>ELEGANT EVENING GOWN</h1>
            <p>
              Fitted bodice, flowing skirt <span>In stock</span>
            </p>
          </div>
          <div className="top-right">
            <button className="cart-btn">
              <img src={Cart} alt="cart icon" />
              Add To Cart
            </button>
          </div>
        </div>
        <div className="images-container">
          <img src={Image} alt="product image" />
        </div>
        <div className="products-info">
          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>Distressed detailing for a rugged look</li>
              <li>Button-up front closure with engraved metal buttons</li>
              <li>Two chest pockets with buttoned flaps</li>
              <li>Two side pockets for added functionality</li>
              <li>Adjustable buttoned cuffs for a personalized fit</li>
              <li>Back waist tabs for customizable styling</li>
            </ul>
          </div>
          <div className="price-and-sizes-container">
            <div className="prices">
              <p>
                $89.99 <span>(MRP incl. of all taxes)</span>
              </p>
              <button className="cart-btn">
                <img src={Cart} alt="cart icon" />
                Add To Cart
              </button>
            </div>

            <div className="sizes">
              <h4>Available Sizes: </h4>
              <div className="size-con">
                <div className="size">S</div>
                <div className="size">M</div>
                <div className="size">L</div>
                <div className="size">XL</div>
              </div>
            </div>
          </div>
          <div className="add-review">
            <Form>
              <h3>Leave a review</h3>
              <FormRow type="text" name="title" labelText="Review title:" />
              <FormRow type="text" name="comment" labelText="Comments:" />
              <div className="star-div">
                <p>Give a rating: </p>
                <StarRating onRatingSelect={handleRatingSelect} />
              </div>
              <button type="submit">Submit</button>
            </Form>
          </div>
          <div className="ratings-and-reviews">
            <h3>Ratings & Reviews</h3>
            <div className="reviews">
              <div className="total-reviews">
                <h1>4.6</h1>
                <StarRating rating={4.6} />
                <p>49 ratings</p>
              </div>
              <h3>Reviews</h3>
              {reviews
                .slice(0, showMore ? reviews.length : 2)
                .map((review, index) => (
                  <div className="review" key={index}>
                    <p className="author">{review.author}</p>
                    <p className="title">{review.title}</p>
                    <p className="comment">{review.comment}</p>
                    <StarRating rating={review.rating} />
                  </div>
                ))}
            </div>
            {reviews.length > 2 && (
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

export default Product;
