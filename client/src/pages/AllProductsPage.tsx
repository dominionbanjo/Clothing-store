import { createContext, useContext, useState } from "react";
import Wrapper from "../assets/wrappers/AllProductsPage";
import ProductsContainer from "../components/ProductsContainer";
import ProductsPageTop from "../components/ProductsPageTop";

type ProductContext = {
  productType: string;
  setProductType: (type: string) => void;
};

const ProductsContext = createContext<ProductContext | undefined>(undefined);

const AllProducts = () => {
  const [productType, setProductType] = useState<string>("Women");

  return (
    <ProductsContext.Provider value={{ productType, setProductType }}>
      <Wrapper>
        <ProductsPageTop homepage={false} />
        <ProductsContainer />
      </Wrapper>
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }
  return context;
};

export default AllProducts;
