import Product from "../components/Product";
import { products } from "../utils/products";

const HomePageProductsContainer = () => {
  return (
    <>
      <div className="products-container">
        {products.slice(0, 6).map((product) => {
          return (
            <Product
              key={product.description}
              description={product.description}
              image={product.image}
              category={product.category}
              price={product.price}
              fit={product.fit}
            />
          );
        })}
      </div>
    </>
  );
};
export default HomePageProductsContainer;
