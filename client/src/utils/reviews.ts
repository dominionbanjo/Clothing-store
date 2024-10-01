interface Review {
  author: string;
  title: string;
  comment: string;
  rating: number;
}

export const reviews: Review[] = [
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
