import { motion } from "framer-motion";
import Wrapper from "../assets/wrappers/Footer";
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
    <Wrapper>
      <section className="animated-section">
        <motion.div
          className="scrolling-section"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          {items.map((item) => (
            <div className="item" key={item}>
              <img src={Star} alt="small star" />
              <h4>{item}</h4>
            </div>
          ))}
          {items.map((item) => (
            <div className="item" key={`dup-${item}`}>
              <img src={Star} alt="small star" />
              <h4>{item}</h4>
            </div>
          ))}
        </motion.div>
      </section>
      <section className="social-section">
        <h1>
          Style<span className="brown-text">.</span>Loom
        </h1>
        <div className="socials">
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
      <section className="links-section">
        <div className="left">
          <h3>Home</h3>
          <div className="links">
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
          <Form>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <img
              src={submitArrow}
              className="submit-arrow"
              alt="submit arrow"
            />
          </Form>
        </div>
      </section>
      <section className="t-and-c">
        <div className="t-left">
          <p>© 2024 StyleLoom. All rights reserved.</p>
        </div>
        <div className="t-right">
          <p>Terms & Conditions</p>
          <div className="dash"></div>
          <p>Privacy Policy</p>
        </div>
      </section>
    </Wrapper>
  );
};

export default Footer;
