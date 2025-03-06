import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Elevate from "../components/Elevate";
import QandA from "../components/QandA";
import TestimonialSection from "../components/TestimonialSection";
import { fetchUser } from "../../features/userSlice";
import { getCartItems } from "../../features/cartSlice";
import { createContext, useContext, useState } from "react";
import { store } from "../store";
import ScrollToTop from "../components/ScrollToTop";

type ProductContext = {
  productType: string;
  setProductType: (type: string) => void;
};

export const loader = async () => {
  await store.dispatch(fetchUser());
  await store.dispatch(getCartItems());
  return null;
};

const ProductsContext = createContext<ProductContext | undefined>(undefined);

const HomeLayout = () => {
  const [productType, setProductType] = useState<string>("");

  return (
    <ProductsContext.Provider value={{ productType, setProductType }}>
      <Header />
      <MobileHeader />
      <ScrollToTop />
      <Outlet />
      <TestimonialSection />
      <QandA />
      <Elevate />
      <Footer />
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

export default HomeLayout;
