import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/MobileHeader";
import { TbAlignRight } from "react-icons/tb";

const MobileHeader = () => {
  return (
    <Wrapper>
      <>
        <div className="mobile-header">
          <NavLink to="/" className="header-link" end>
            Style<span className="brown-text">.</span>Loom
          </NavLink>
          <TbAlignRight />
        </div>
      </>
    </Wrapper>
  );
};
export default MobileHeader;
