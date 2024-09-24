import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Header";
import { HiMiniShoppingCart } from "react-icons/hi2";

const Header = () => {
  return (
    <Wrapper>
      <ul>
        <div className="left">
          <li>
            <NavLink to="/" className="header-button active" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="header-button" end>
              Products
            </NavLink>
          </li>
        </div>

        <li>
          <NavLink to="/" className="header-link" end>
            Style<span className="brown-text">.</span>Loom
          </NavLink>
        </li>
        <div className="right">
          <li>
            <NavLink
              to="#"
              className="cart-btn"
              type="button"
              onClick={() => console.log("cart")}
            >
              {/* <img src={CartIconSvg} alt="Cart-icon" /> */}
              <HiMiniShoppingCart />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="header-button brown" end>
              contact
            </NavLink>
          </li>
        </div>
      </ul>
    </Wrapper>
  );
};
export default Header;
