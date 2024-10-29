import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Header";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { useAppSelector } from "../hooks";

const Header = () => {
  const { user } = useAppSelector((store) => store.user);

  return (
    <Wrapper>
      <ul>
        <div className="left">
          <li>
            <NavLink to="/" className="header-button" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="header-button">
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
            <NavLink to={user ? "/profile" : "/login"}>
              {user?.avatar ? (
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    marginRight: "18px",
                  }}
                  src={user.avatar}
                  alt="avatar"
                  className="img"
                />
              ) : (
                <CgProfile style={{ color: "white" }} />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="cart-btn"
              type="button"
              onClick={() => console.log("cart")}
            >
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
