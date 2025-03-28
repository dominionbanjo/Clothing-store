import Abstract from "../assets/Images/Abstract3.png";
import Container1 from "../assets/Images/Container.png";
import Container2 from "../assets/Images/Container (2).png";
import Container3 from "../assets/Images/Container (3).png";
import Container4 from "../assets/Images/Container (4).png";
import Container5 from "../assets/Images/Container (5).png";
import Container6 from "../assets/Images/Container (1).png";
import Stars from "../assets/Images/5stars.png";
// import Wrapper from "../assets/wrappers/TestimonialSection";

const TestimonialSection = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-[95%] mt-[50px] mb-[20px] border-[1px] border-dashed border-[rgba(194,180,163,0.2)] rounded-[15px] pt-[25px] sm:w-[90%] sm:mt-[150px] sm:mb-[150px] sm:pt-[50px]">
        <div className="w-full pl-[10px] text-left mb-[20px] relative z-[1] sm:pl-[40px] sm:mb-[30px]">
          <img
            className="hidden lg:block absolute top-[-50px] right-0 w-[254px] h-auto rounded-tr-[10px] z-[-1]"
            src={Abstract}
            alt=""
          />
          <div className="w-[95%] sm:w-[85%]">
            <h2 className="text-[20px] tracking-[1.5px] uppercase mb-[15px] sm:text-[30px] lg:text-[40px] sm:mb-[20px]">
              The StyleLoom Testimonial Collection.
            </h2>
            <p className="text-[13px] tracking-[1.5px] opacity-[0.6] sm:text-[15px]">
              At StyleLoom, our customers are the heartbeat of our brand.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-[1px] border-dashed border-[rgba(194,180,163,0.2)] h-[280px] w-full p-[20px_40px] overflow-hidden text-left flex flex-col justify-center sm:h-[300px]">
            <h3>
              <img className="mb-[15px]" src={Container1} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p className="m-0 text-[13px] opacity-[0.6]">
              StyleLoom exceeded my expectations. The gown's quality and design
              made me feel like a queen. Fast shipping, too!
            </p>
          </div>
          <div className="border-[1px] border-dashed border-[rgba(194,180,163,0.2)] h-[280px] w-full p-[20px_40px] overflow-hidden text-left flex flex-col justify-center sm:h-[300px]">
            <h3>
              <img className="mb-[15px]" src={Container2} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p className="m-0 text-[13px] opacity-[0.6]">
              Absolutely love the style and warmth of the jacket. A perfect
              blend of fashion and functionality!
            </p>
          </div>
          <div className="border-[1px] border-dashed border-[rgba(194,180,163,0.2)] h-[280px] w-full p-[20px_40px] overflow-hidden text-left flex flex-col justify-center sm:h-[300px]">
            <h3>
              <img className="mb-[15px]" src={Container3} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p className="m-0 text-[13px] opacity-[0.6]">
              Adorable and comfortable! My daughter loves her new outfit. Thank
              you, StyleLoom, for dressing our little fashionista.
            </p>
          </div>
          <div className="border-[1px] border-dashed border-[rgba(194,180,163,0.2)] h-[280px] w-full p-[20px_40px] overflow-hidden text-left flex flex-col justify-center sm:h-[300px]">
            <h3>
              <img className="mb-[15px]" src={Container4} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p className="m-0 text-[13px] opacity-[0.6]">
              Impressed by the quality and style. These shoes turned heads at
              every event. StyleLoom, you've gained a loyal customer!
            </p>
          </div>
          <div className="border-[1px] border-dashed border-[rgba(194,180,163,0.2)] h-[280px] w-full p-[20px_40px] overflow-hidden text-left flex flex-col justify-center sm:h-[300px]">
            <h3>
              <img className="mb-[15px]" src={Container5} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p className="m-0 text-[13px] opacity-[0.6]">
              Perfect fit and exceptional quality. These jeans have become my
              go-to for casual and chic outings.
            </p>
          </div>
          <div className="border-[1px] border-dashed border-[rgba(194,180,163,0.2)] h-[280px] w-full p-[20px_40px] overflow-hidden text-left flex flex-col justify-center sm:h-[300px]">
            <h3>
              <img className="mb-[15px]" src={Container6} alt="" />
            </h3>
            <h4>
              <img src={Stars} alt="" />
            </h4>
            <p className="m-0 text-[13px] opacity-[0.6]">
              Stylish sneakers that don't compromise on comfort. StyleLoom knows
              how to balance fashion and functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
