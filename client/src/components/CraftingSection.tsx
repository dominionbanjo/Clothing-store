import firstIcon from "../assets/Images/first-icon-con.png";
import secondIcon from "../assets/Images/second-icon-con.png";
import thirdIcon from "../assets/Images/third-icon-con.png";
import fourthIcon from "../assets/Images/fourth-icon-con.png";
import fifthIcon from "../assets/Images/fifth-icon-con.png";
import sixthIcon from "../assets/Images/sixth-icon-con.png";

import icon1 from "../assets/Images/Icon1.png";
import icon2 from "../assets/Images/Icon2.png";
import icon3 from "../assets/Images/Icon3.png";
import icon4 from "../assets/Images/Icon4.png";
import icon5 from "../assets/Images/Icon5.png";
import icon6 from "../assets/Images/Icon6.png";

const CraftingSection = () => {
  return (
    <>
      <div className="crafting">
        <div className="crafting-top">
          <h2>Crafting Trends, Inspiring Confidence</h2>
          <p>
            Explore a world of fashion at StyleLoom, where trends meet
            affordability.
          </p>
        </div>
        <div className="crafting-bottom">
          <div className="crafting-grid-item">
            <img src={firstIcon} alt="" />
            <img src={icon1} alt="" />
            <h3>Passionate Craftsmanship</h3>
            <p>
              Every garment at StyleLoom is crafted with passion, reflecting our
              commitment to quality and innovation.
            </p>
          </div>
          <div className="crafting-grid-item">
            <img src={secondIcon} alt="" />
            <img src={icon2} alt="" />
            <h3>Fashion Forward</h3>
            <p>
              We're more than a brand; we're trendsetters, curating styles that
              empower and inspire confidence.
            </p>
          </div>
          <div className="crafting-grid-item">
            <img src={thirdIcon} alt="" />
            <img src={icon3} alt="" />
            <h3>Customer-Centric Approach</h3>
            <p>
              At StyleLoom, our customers are at the heart of everything we do.
              Your satisfaction is our measure of success.
            </p>
          </div>
          <div className="crafting-grid-item">
            <img src={fourthIcon} alt="" />
            <img src={icon4} alt="" />
            <h3>Global Inspiration</h3>
            <p>
              Influenced by global trends, we bring you a diverse and dynamic
              collection, embodying the spirit of fashion from around the world.
            </p>
          </div>
          <div className="crafting-grid-item">
            <img src={fifthIcon} alt="" />
            <img src={icon5} alt="" />
            <h3>Empowering Your Style</h3>
            <p>
              Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of
              self-expression and empowerment through fashion.
            </p>
          </div>
          <div className="crafting-grid-item">
            <img src={sixthIcon} alt="" />
            <img src={icon6} alt="" />
            <h3>Sustainable Practices</h3>
            <p>
              StyleLoom is committed to sustainability, integrating eco-friendly
              practices into our production process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CraftingSection;
