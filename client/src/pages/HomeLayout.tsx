import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Elevate from "../components/Elevate";
import QandA from "../components/QandA";
import TestimonialSection from "../components/TestimonialSection";
import { useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { fetchUser } from "../../features/userSlice";

const HomeLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
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
