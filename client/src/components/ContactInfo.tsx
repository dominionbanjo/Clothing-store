import Abstract from "../assets/Images/Abstract5.png";
import firstIcon from "../assets/Images/Icon Container1.png";
import secondIcon from "../assets/Images/Icon Container2.png";
import thirdIcon from "../assets/Images/Icon Container3.png";
import icon1 from "../assets/Images/Icon7.png";
import icon2 from "../assets/Images/Icon8.png";
import icon3 from "../assets/Images/Icon9.png";
import Cancel1 from "../assets/Images/cancel1.png";
import Cancel2 from "../assets/Images/cancel2.png";
import Cancel3 from "../assets/Images/cancel3.png";
import Return1 from "../assets/Images/return1.png";
import Return2 from "../assets/Images/return2.png";
import Return3 from "../assets/Images/return3.png";
import ArrowButton from "./ArrowButton";

const ContactInfo = () => {
  return (
    <>
      <section className="first-section">
        <div className="first-section-top">
          <img src={Abstract} alt="" />
          <div className="first-section-top-texts">
            <h2>Your Partner in Every Step of Your Fashion Journey.</h2>
            <p>
              24/7 Assistance for Seamless Shopping and Unmatched Customer
              Satisfaction.
            </p>
          </div>
        </div>
        <h2 className="first-mid">CONTACT INFORMATION</h2>
        <div className="first-section-bottom">
          <div className="first-section-grid-item">
            <img src={firstIcon} alt="" />
            <img src={icon1} alt="" />
            <h3>Email</h3>
            <p>support@StyleLoom.com</p>
          </div>
          <div className="first-section-grid-item">
            <img src={secondIcon} alt="" />
            <img src={icon2} alt="" />
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="first-section-grid-item">
            <img src={thirdIcon} alt="" />
            <img src={icon3} alt="" />
            <h3>Location</h3>
            <p>Get Direction</p>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="top">
          <h2>RETURN POLICY</h2>
          <ArrowButton text="Read Return Policy" />
        </div>
        <div className="bottom">
          <div className="bottom-item">
            <img src={Return1} alt="loading" />
            <div className="texts">
              <h4>Cancellation Window</h4>
              <p>
                Orders can be canceled within 24 hours of placement for a full
                refund.
              </p>
            </div>
          </div>
          <div className="bottom-item">
            <img src={Return2} alt="loading" />
            <div className="texts">
              <h4>Cancellation Process</h4>
              <p>
                Visit our Order Management section to cancel your order
                effortlessly.
              </p>
            </div>
          </div>
          <div className="bottom-item">
            <img src={Return3} alt="loading" />
            <div className="texts">
              <h4>Refund Timeline</h4>
              <p>
                Refunds for canceled orders are processed within 5-7 business
                days.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="top">
          <h2>CANCELLATION POLICY</h2>
          <ArrowButton text="Read Cancelation Policy" />
        </div>
        <div className="bottom">
          <div className="bottom-item">
            <img src={Cancel1} alt="loading" />
            <div className="texts">
              <h4>Cancellation Window</h4>
              <p>
                Orders can be canceled within 24 hours of placement for a full
                refund.
              </p>
            </div>
          </div>
          <div className="bottom-item">
            <img src={Cancel2} alt="loading" />
            <div className="texts">
              <h4>Cancellation Process</h4>
              <p>
                Visit our Order Management section to cancel your order
                effortlessly.
              </p>
            </div>
          </div>
          <div className="bottom-item">
            <img src={Cancel3} alt="loading" />
            <div className="texts">
              <h4>Refund Timeline</h4>
              <p>
                Refunds for canceled orders are processed within 5-7 business
                days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactInfo;
