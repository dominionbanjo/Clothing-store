// import Wrapper from "../assets/wrappers/ContactPage";
// import ContactInfo from "../components/ContactInfo";

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
import ArrowButton from "../components/ArrowButton";
const ContactPage = () => {
  return (
    <section className="flex flex-col items-center">
      <section className="first-section w-[95%] lg:w-[90%] mt-[30px] lg:mt-[50px] custom-border rounded-[15px] pt-[20px] lg:pt-[50px] mb-0">
        <div className="first-section-top w-full px-0 pl-[18px] lg:pl-[40px] py-[10px] lg:py-[30px] text-left mb-[20px] lg:mb-[60px] relative z-[1]">
          <img
            className="hidden lg:block absolute top-[-47px] right-0 w-[255px] h-auto rounded-tr-[10px] z-[-1] "
            src={Abstract}
            alt=""
          />
          <div className="first-section-top-texts w-[95%] lg:w-[85%]">
            <h2 className="text-[22px] lg:text-[40px] tracking-[1.5px] uppercase mb-[20px]">
              Your Partner in Every Step of Your Fashion Journey.
            </h2>
            <p className="text-[13px] lg:text-[15px] tracking-[1.5px] opacity-60 ">
              24/7 Assistance for Seamless Shopping and Unmatched Customer
              Satisfaction.
            </p>
          </div>
        </div>
        <h2 className="first-mid w-full custom-border px-[18px] py-[20px] lg:px-[40px] lg:py-[30px] mx-0 my-[0px]">
          CONTACT INFORMATION
        </h2>
        <div className="first-section-bottom  w-full grid grid-cols-1 lg:grid-cols-3">
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
      <section className="second-section flex flex-col w-[95%] lg:w-[90%] mt-[120px] custom-border rounded-[20px] ">
        <div className="top flex  lg:flex-row items-start lg:items-center justify-between  border-b border-dashed px-[15px] py-[30px] lg:px-[40px]  border-[rgba(194,180,163,0.2)]">
          <h2>RETURN POLICY</h2>
          <ArrowButton
            className=" w-[44%] sm:w-auto text-[10px] lg:text-[15px] lg:w-auto mx-[5px] px-[3px] sm:px-[8px] lg:px-[15px] py-[7px] lg:py-[15px]"
            text="Read Return Policy"
          />
        </div>
        <div className="bottom grid grid-cols-1 lg:grid-cols-3">
          <div className="bottom-item ">
            <img className="" src={Return1} alt="loading" />
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
          <div className="bottom-item border-none">
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
      <section className="second-section flex flex-col w-[95%] lg:w-[90%] mt-[120px] custom-border rounded-[20px] ">
        <div className="top flex lg:flex-row items-start lg:items-center justify-between border-b border-dashed px-[15px] py-[30px] lg:px-[40px] border-[rgba(194,180,163,0.2)]">
          <h2>CANCELLATION POLICY</h2>
          <ArrowButton
            className="w-[44%] sm:w-auto text-[10px] lg:text-[15px] lg:w-auto mx-[5px] px-[3px] sm:px-[8px] lg:px-[15px] py-[7px] lg:py-[15px]"
            text="Read Cancellation Policy"
          />
        </div>
        <div className="bottom grid grid-cols-1 lg:grid-cols-3">
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
          <div className="bottom-item border-none">
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
    </section>
  );
};
export default ContactPage;
