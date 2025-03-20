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
        className="absolute top-14 right-4 w-48 bg-[#0f0f0f] z-30 flex flex-col py-5 pl-7 rounded-xl"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="left">
          <ul className="list-disc">
            <li className="mb-3">
              <NavLink
                to="/"
                className=" text-sm mb-5"
                onClick={setShowMenu}
                end
              >
                Home
              </NavLink>
            </li>
            <li className="mb-3">
              <NavLink
                to="/products"
                className=" text-sm mb-5"
                onClick={setShowMenu}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul className="list-disc">
            <li className="mb-3">
              <NavLink
                to="/contact"
                className=" brown text-sm mb-5"
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
