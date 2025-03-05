import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Elevate from "../components/Elevate";
import QandA from "../components/QandA";
import TestimonialSection from "../components/TestimonialSection";
import { fetchUser } from "../../features/userSlice";
import { getCartItems } from "../../features/cartSlice";

import { store } from "../store";
import ScrollToTop from "../components/ScrollToTop";

export const loader = async () => {
  await store.dispatch(fetchUser());
  await store.dispatch(getCartItems());
  return null;
};

const HomeLayout = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <ScrollToTop />
      <Outlet />
      <TestimonialSection />
      <QandA />
      <Elevate />
      <Footer />
    </>
  );
};
export default HomeLayout;
