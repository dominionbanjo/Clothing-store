import { NavLink } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: {
    opacity: 0,
    position: "absolute" as const,
    zIndex: 10,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

interface PopScreenProps {
  setShowMenu: () => void;
  ref: React.RefObject<HTMLDivElement>;
}

const PopScreen = React.forwardRef<HTMLDivElement, PopScreenProps>(
  ({ setShowMenu }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="pop-screen"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="left">
          <ul>
            <li>
              <NavLink
                to="/"
                className="header-button"
                onClick={setShowMenu}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="header-button"
                onClick={setShowMenu}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <NavLink
                to="/contact"
                className="header-button brown"
                onClick={setShowMenu}
                end
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </motion.div>
    );
  }
);

export default PopScreen;
