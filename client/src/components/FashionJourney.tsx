import Abstract from "../assets/Images/Abstract.png";
const FashionJourney = () => {
  return (
    <>
      <section className="journey homepage-section">
        <div className="journey-top w-full pl-[40px] text-left mb-[60px] relative z-10">
          <img
            className="hidden lg:block absolute top-[-47px] right-0 lg:w-[185px]  h-auto rounded-tr-[10px] z-[-1]"
            src={Abstract}
            alt=""
          />
          <div className="journey-top-texts">
            <h2 className="text-xl md:text-2xl lg:text-2xl uppercase mb-5">
              Navigating the StyleLoom Fashion Journey.
            </h2>
            <p className="text-sm w-full opacity-60">
              At StyleLoom, we've designed a straightforward shopping experience
              to make fashion accessible.
            </p>
          </div>
        </div>
        <div className="journey-bottom">
          <div className="journey-grid-item">
            <h4>Step 01</h4>
            <h3>Discover Trends</h3>
            <p>
              Explore our curated collection of over 1000 styles, spanning
              global fashion trends.
            </p>
          </div>
          <div className="journey-grid-item">
            <h4>Step 02</h4>
            <h3>Effortless Navigation</h3>
            <p>
              Intuitive filters and categories help you find the perfect pieces
              tailored to your style.
            </p>
          </div>
          <div className="journey-grid-item">
            <h4>Step 03</h4>
            <h3>Secure Checkout</h3>
            <p>
              Multiple payment options and encrypted transactions ensure a safe
              and hassle-free purchase.
            </p>
          </div>
          <div className="journey-grid-item">
            <h4>Step 04</h4>
            <h3>Unbox Happiness</h3>
            <p>
              Unbox a fashion-forward experience delivered right to your door,
              ready to elevate your style.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default FashionJourney;
