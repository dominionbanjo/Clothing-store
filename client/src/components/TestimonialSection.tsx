import Abstract from "../assets/Images/Abstract3.png";
import Container1 from "../assets/Images/Container.png";
import Container2 from "../assets/Images/Container (2).png";
import Container3 from "../assets/Images/Container (3).png";
import Container4 from "../assets/Images/Container (4).png";
import Container5 from "../assets/Images/Container (5).png";
import Container6 from "../assets/Images/Container (1).png";
import Stars from "../assets/Images/5stars.png";
import Wrapper from "../assets/wrappers/TestimonialSection";

const TestimonialSection = () => {
  return (
    <Wrapper>
      <section className="testimonial">
        <div className="testimonial-top">
          <img src={Abstract} alt="" />
          <div className="testimonial-top-texts">
            <h2>The StyleLoom Testimonial Collection.</h2>
            <p>At StyleLoom, our customers are the heartbeat of our brand.</p>
          </div>
        </div>
        <div className="testimonial-bottom">
          <div className="testimonial-grid-item">
            <h3>
              <img src={Container1} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p>
              StyleLoom exceeded my expectations. The gown's quality and design
              made me feel like a queen. Fast shipping, too!
            </p>
          </div>
          <div className="testimonial-grid-item">
            <h3>
              <img src={Container2} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p>
              Absolutely love the style and warmth of the jacket. A perfect
              blend of fashion and functionality!
            </p>
          </div>
          <div className="testimonial-grid-item">
            <h3>
              <img src={Container3} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p>
              Adorable and comfortable! My daughter loves her new outfit. Thank
              you, StyleLoom, for dressing our little fashionista.
            </p>
          </div>
          <div className="testimonial-grid-item">
            <h3>
              <img src={Container4} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p>
              Impressed by the quality and style. These shoes turned heads at
              every event. StyleLoom, you've gained a loyal customer!
            </p>
          </div>
          <div className="testimonial-grid-item">
            <h3>
              <img src={Container5} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p>
              Perfect fit and exceptional quality. These jeans have become my
              go-to for casual and chic outings.
            </p>
          </div>
          <div className="testimonial-grid-item">
            <h3>
              <img src={Container6} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p>
              Stylish sneakers that don't compromise on comfort. StyleLoom knows
              how to balance fashion and functionality.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default TestimonialSection;
