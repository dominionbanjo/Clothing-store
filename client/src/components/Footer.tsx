import { motion } from "framer-motion";
// import Wrapper from "../assets/wrappers/Footer";
import Star from "../assets/Images/small-star.png";
import { items } from "../utils/items";
import { NavLink, Form } from "react-router-dom";
import social1 from "../assets/Images/social1.png";
import social2 from "../assets/Images/social2.png";
import social3 from "../assets/Images/social3.png";
import social4 from "../assets/Images/social4.png";
import submitArrow from "../assets/Images/submit-arrow.png";

const Footer = () => {
  const variants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          duration: 80,
          ease: "linear",
        },
      },
    },
  };

  return (
    <footer className="flex flex-col w-full">
      <section className="animated-section overflow-hidden whitespace-nowrap relative w-full flex h-[90px] custom-border mb-[40px] ">
        <motion.div
          className="scrolling-section flex"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          {items.map((item) => (
            <div
              className="item flex items-center uppercase px-[20px] py-[15px]"
              key={item}
            >
              <img className="w-[35px] mr-[10px]" src={Star} alt="small star" />
              <h4 className="opacity-60">{item}</h4>
            </div>
          ))}
          {items.map((item) => (
            <div
              className="item flex items-center uppercase px-[20px] py-[15px]"
              key={`dup-${item}`}
            >
              <img className="w-[35px] mr-[10px]" src={Star} alt="small star" />
              <h4 className="opacity-60">{item}</h4>
            </div>
          ))}
        </motion.div>
      </section>
      <section className="social-section border-b border-dashed border-[#c2b4a333] w-full flex flex-col sm:flex-row items-start sm:items-center  lg:justify-center p-[30px] lg:p-[80px] lg:pl-[120px] mb-[40px] lg:mb-[40px] ">
        <h1 className="lg:w-[70%] text-[50px] sm:mr-[60px] md:mr-[220px] lg:text-[74px] mb-[10px]">
          Style<span className="brown-text">.</span>Loom
        </h1>
        <div className="socials w-[180px] lg:w-[400px] flex items-center justify-between pr-[0px] py-0">
          <NavLink to="#" className="social-box">
            <img src={social1} alt="instagram logo" />
          </NavLink>
          <NavLink to="#" className="social-box">
            <img src={social2} alt="basketball logo" />
          </NavLink>
          <NavLink to="#" className="social-box">
            <img src={social3} alt="twitter logo" />
          </NavLink>
          <NavLink to="#" className="social-box">
            <img src={social4} alt="be logo" />
          </NavLink>
        </div>
      </section>
      <section className="links-section lg:self-center w-[95%] lg:w-full p-[20px] lg:p-[50px] mb-[40px] flex flex-col md:flex-row items-center justify-between">
        <div className="left">
          <h3>Home</h3>
          <div className="links mb-[15px]">
            <NavLink to="#" className="footer-links">
              Why us
            </NavLink>
            <NavLink to="#" className="footer-links">
              About us
            </NavLink>
            <NavLink to="#" className="footer-links">
              Testimonials
            </NavLink>
            <NavLink to="#" className="footer-links">
              FAQ's
            </NavLink>
          </div>
        </div>
        <div className="middle">
          <h3>Products</h3>
          <div className="links">
            <NavLink to="#" className="footer-links">
              Men's wear
            </NavLink>
            <NavLink to="#" className="footer-links">
              Women's wear
            </NavLink>
            <NavLink to="#" className="footer-links">
              Kids-wear
            </NavLink>
            <NavLink to="#" className="footer-links">
              Unisex
            </NavLink>
          </div>
        </div>
        <div className="right">
          <h3>Subscribe to Newsletter</h3>
          <Form className="relative ">
            <input
              className="custom-border"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <img
              src={submitArrow}
              className="submit-arrow absolute  top-[25%] right-[18%] hover:cursor-pointer"
              alt="submit arrow"
            />
          </Form>
        </div>
      </section>
      <section className="t-and-c w-full border-t border-dashed border-[#c2b4a333] flex flex-col lg:flex-row items-start lg:items-center justify-between px-[20px] lg:px-[40px] py-[30px] opacity-60 ">
        <div className="t-left mb-[5px]">
          <p className="text-[14px] sm:text-[16px]">
            © 2025 StyleLoom. All rights reserved.
          </p>
        </div>
        <div className="t-right flex justify-between items-center  lg:mr-[100px]">
          <p className="text-[13px]  sm:text-[16px]">Terms & Conditions</p>
          <div className="dash w-[1px] h-[20px] bg-[#ffff] opacity-40 my-0 mx-[10px]"></div>
          <p className="text-[13px]  sm:text-[16px]">Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
