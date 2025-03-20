import { NavLink } from "react-router-dom";
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
    <header className=" lg:hidden w-full h-14 flex items-center justify-center px-4 py-8">
      <div className="mobile-header flex items-center justify-between w-full">
        <NavLink
          to="/"
          className="header-link text-dark no-underline text-3xl"
          end
        >
          Style<span className="brown-text">.</span>Loom
        </NavLink>
        <div className="right-icons w-[29%] max-w-[110px] flex items-center justify-between">
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
              <CgProfile
                className=" text-3xl p-2 bg-gold rounded md"
                style={{ color: "white" }}
              />
            )}
          </NavLink>

          <HiMiniShoppingCart
            type="button"
            className="cart-btn text-3xl p-2 bg-gold rounded md"
            onClick={() => setShowCart(!showCart)}
          />
          <TbAlignRight
            className="tb-align-right text-3xl p-2 bg-gold rounded md"
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
    </header>
  );
};

export default MobileHeader;
