import { NavLink } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { useAppSelector } from "../hooks";
import Cart from "./Cart";
import { useCartContext } from "../context/cartContext";

const Header = () => {
  const { user } = useAppSelector((store) => store.user);
  const { showCart, setShowCart } = useCartContext();

  return (
    <header className="hidden lg:flex bg-dark_bg pt-3 text-white w-full">
      <ul className="flex w-[90%] items-center justify-between list-none mx-auto my-0 py-4">
        <div className="flex w-[13%] items-center justify-between">
          <li>
            <NavLink
              to="/"
              className="header-button text-dark font-manrope no-underline w-16 h-6 p-4 mr-4 rounded-md transition-colors duration-500 hover:text-[#8d7d6a] active:bg-[#2a2a2a]"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="header-button text-dark font-manrope no-underline w-16 h-6 p-4 mr-4 rounded-md transition-colors duration-500 hover:text-[#8d7d6a] active:bg-[#2a2a2a]"
            >
              Products
            </NavLink>
          </li>
        </div>

        <li>
          <NavLink to="/" className="text-dark text-2xl no-underline">
            Style<span className="text-[#ae9b84]">.</span>Loom
          </NavLink>
        </li>

        <div className="flex w-[14%] items-center justify-between">
          <li>
            <NavLink to={user ? "/profile" : "/login"}>
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-6 h-6 rounded-full mr-4"
                />
              ) : (
                <CgProfile className="text-white w-12 h-12 p-3 bg-[#1e1e1e] rounded-lg mr-3" />
              )}
            </NavLink>
          </li>
          <li>
            <HiMiniShoppingCart
              className="cursor-pointer text-white w-12 h-12 p-3 bg-[#1e1e1e] rounded-lg mr-3"
              onClick={() => setShowCart(!showCart)}
            />
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-dark font-manrope no-underline w-16 h-6 p-4 mr-4 rounded-md transition-colors duration-500 hover:text-[#e3dcd3] active:bg-[#2a2a2a] bg-[#ae9b84]"
              end
            >
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
      {showCart && <Cart mobile={false} />}
    </header>
  );
};

export default Header;
