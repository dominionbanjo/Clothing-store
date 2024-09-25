import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Elevate from "../components/Elevate";
import QandA from "../components/QandA";
import TestimonialSection from "../components/TestimonialSection";
const HomeLayout = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <Outlet />
      <TestimonialSection />
      <QandA />
      <Elevate />
      <Footer />
    </>
  );
};
export default HomeLayout;
