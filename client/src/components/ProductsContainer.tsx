import Product from "../components/Product";
import { products } from "../utils/products";
import { useState } from "react";
import ArrowButton from "./ArrowButton";

const ProductsContainer = () => {
  const categories = ["Women's Wear", "Accessories", "Hand bag"];

  const initialVisibleCounts = categories.reduce((acc, category) => {
    acc[category] = 3;
    return acc;
  }, {} as Record<string, number>);

  const [visibleCounts, setVisibleCounts] = useState(initialVisibleCounts);

  const handleViewMore = (category: string) => {
    const filteredProductsCount = products.filter(
      (product) => product.category === category
    ).length;
    setVisibleCounts((prevCounts) => ({
      ...prevCounts,
      [category]: filteredProductsCount,
    }));
  };

  return (
    <>
      {["Women's Wear", "Accessories", "Hand bag"].map((category) => (
        <section className="dress-section gen-sec" key={category}>
          <div className="section-top">
            <h2>{category}</h2>
            <ArrowButton text="View All" />
          </div>
          <div className="products-container">
            {products
              .filter((product) => product.category === category)
              .slice(0, visibleCounts[category]) // Limit the number of displayed products
              .map((product) => (
                <Product
                  key={product.description}
                  description={product.description}
                  image={product.image}
                  category={product.category}
                  price={product.price}
                  fit={product.fit}
                />
              ))}
          </div>
          {products.filter((product) => product.category === category).length >
            visibleCounts[category] && (
            <button onClick={() => handleViewMore(category)}>View More</button>
          )}
        </section>
      ))}
    </>
  );
};
export default ProductsContainer;
