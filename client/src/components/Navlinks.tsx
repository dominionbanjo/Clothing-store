import { links } from "../utils/links";
import { NavLink } from "react-router-dom";

import CartIconSvg from "../assets/Images/cartIcon.svg";

const Navlinks = ({ smallScreen }: { smallScreen: boolean }) => {
  return (
    <>
      {links.map((link) => {
        const { text, path, className } = link;
        return (
          <li key={text}>
            <NavLink to={path} className={className} end>
              {text === "cart" ? CartIconSvg : text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default Navlinks;
