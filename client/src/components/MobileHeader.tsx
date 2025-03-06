import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/MobileHeader";
import { TbAlignRight } from "react-icons/tb";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import PopScreen from "./PopScreen";
import Cart from "./Cart";
import { useAppSelector } from "../hooks";
import { useCartContext } from "../context/cartContext";

const MobileHeader = () => {
  const { user } = useAppSelector((store) => store.user);
  const { showCart, setShowCart } = useCartContext();

  const [showMenu, setShowMenu] = useState(false);
  const popScreenRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popScreenRef.current &&
      !popScreenRef.current.contains(event.target as Node) &&
      !event.composedPath().includes(document.querySelector(".tb-align-right")!)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <Wrapper>
      <div className="mobile-header">
        <NavLink to="/" className="header-link" end>
          Style<span className="brown-text">.</span>Loom
        </NavLink>
        <div className="right-icons">
          <NavLink to={user ? "/profile" : "/login"}>
            {user?.avatar ? (
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                }}
                src={user.avatar}
                alt="avatar"
                className="img"
              />
            ) : (
              <CgProfile style={{ color: "white" }} />
            )}
          </NavLink>

          <HiMiniShoppingCart
            type="button"
            className="cart-btn"
            onClick={() => setShowCart(!showCart)}
          />
          <TbAlignRight
            className="tb-align-right"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <AnimatePresence>
          {showMenu && (
            <PopScreen
              ref={popScreenRef}
              setShowMenu={() => setShowMenu(false)}
            />
          )}
        </AnimatePresence>
        {showCart && <Cart mobile={true} />}
      </div>
    </Wrapper>
  );
};

export default MobileHeader;
