import { useState, useEffect } from "react";

interface StarRatingProps {
  totalStars?: number;
  onRatingSelect?: (rating: number) => void;
  rating?: number;
  resetRating?: boolean; // Add resetRating prop
}

const StarRating = ({
  totalStars = 5,
  onRatingSelect,
  rating,
  resetRating, // Accept resetRating prop
}: StarRatingProps) => {
  const [userRating, setUserRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (resetRating) {
      setUserRating(0);
    }
  }, [resetRating]); // Reset userRating when resetRating changes

  const handleClick = (index: number) => {
    if (onRatingSelect) {
      onRatingSelect(index);
    }
    setUserRating(index);
  };

  const handleMouseEnter = (index: number) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  const effectiveRating = rating !== undefined ? rating : userRating;

  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          onClick={() => !rating && handleClick(index + 1)}
          onMouseEnter={() => !rating && handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={(hover || effectiveRating) > index ? "gold" : "gray"}
          style={{ cursor: rating ? "default" : "pointer" }}
        >
          <polygon points="12,17.27 18.18,21 15.64,13.97 21,9.24 13.81,8.63 12,2 10.19,8.63 3,9.24 8.36,13.97 5.82,21" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
