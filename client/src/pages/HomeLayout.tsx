import { Outlet, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, store } from "../store";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Elevate from "../components/Elevate";
import QandA from "../components/QandA";
import TestimonialSection from "../components/TestimonialSection";
import ScrollToTop from "../components/ScrollToTop";
import { fetchUser } from "../../features/userSlice";
import { getCartItems } from "../../features/cartSlice";
import { createContext, useContext, useState } from "react";
import { CartProvider } from "../context/cartContext";

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
  const navigation = useNavigation();
  const { userLoading } = useSelector((state: RootState) => state.user);
  const { cartLoading } = useSelector((state: RootState) => state.cart);

  const isLoading =
    navigation.state === "loading" || userLoading || cartLoading;

  if (isLoading) {
    return <div>Loading data from server...</div>;
  }

  return (
    <ProductsContext.Provider value={{ productType, setProductType }}>
      <CartProvider>
        <Header />
        <MobileHeader />
      </CartProvider>

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
