import Product from "../components/Product";
import { products } from "../utils/products2";
import { useState, useEffect } from "react";
import ArrowButton from "./ArrowButton";
import { useProductsContext } from "../pages/AllProductsPage";

const ProductsContainer = () => {
  const { productType } = useProductsContext();
  const getCategories = (type: string) => {
    if (type === "Men") {
      return ["Men's Shirts", "Men's Shoes", "Men's Watches"];
    } else if (type === "Unisex") {
      return ["Glasses", "Skincare", "Fragrances"];
    } else {
      return ["Women's Wear", "Accessories", "Hand bag"];
    }
  };

  const categories = getCategories(productType);

  const initialVisibleCounts = categories.reduce((acc, category) => {
    acc[category] = 3;
    return acc;
  }, {} as Record<string, number>);

  const [visibleCounts, setVisibleCounts] = useState(initialVisibleCounts);
  const [showMore, setShowMore] = useState(
    categories.reduce((acc, category) => {
      acc[category] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  useEffect(() => {
    setVisibleCounts(
      categories.reduce((acc, category) => {
        acc[category] = 3;
        return acc;
      }, {} as Record<string, number>)
    );

    setShowMore(
      categories.reduce((acc, category) => {
        acc[category] = false;
        return acc;
      }, {} as Record<string, boolean>)
    );
  }, [productType]);

  const handleToggleView = (subCategory: string) => {
    const filteredProductsCount = products.filter(
      (product) => product.subCategory === subCategory
    ).length;

    setVisibleCounts((prevCounts) => ({
      ...prevCounts,
      [subCategory]: showMore[subCategory] ? 3 : filteredProductsCount,
    }));

    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [subCategory]: !prevShowMore[subCategory],
    }));
  };

  return (
    <>
      {categories.map((subCategory) => (
        <section className="dress-section gen-sec" key={subCategory}>
          <div className="section-top">
            <h2>{subCategory}</h2>
            <ArrowButton text="View All" />
          </div>
          <div className="products-container">
            {products
              .filter((product) => product.subCategory === subCategory)
              .slice(0, visibleCounts[subCategory])
              .map((product) => (
                <Product
                  key={product.description}
                  description={product.description}
                  image={product.image}
                  category={product.subCategory}
                  price={product.price}
                  fit={product.fit}
                />
              ))}
          </div>
          {products.filter((product) => product.subCategory === subCategory)
            .length > 3 && (
            <button
              className="view-more"
              onClick={() => handleToggleView(subCategory)}
            >
              {showMore[subCategory] ? "Show Less" : "View More"}
            </button>
          )}
        </section>
      ))}
    </>
  );
};

export default ProductsContainer;
