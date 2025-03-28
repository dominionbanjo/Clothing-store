import Abstract from "../assets/Images/Abstract2.png";
// import Wrapper from "../assets/wrappers/ProductsPageTop";
import { useProductsContext } from "../pages/HomeLayout";

const ProductsPageTop = ({ homepage }: { homepage: boolean }) => {
  let productType: string | undefined;
  let setProductType: ((type: string) => void) | undefined;

  if (!homepage) {
    ({ productType, setProductType } = useProductsContext());
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className=" w-[90%] mt-[60px] custom-border rounded-t-[25px] pt-[50px] mb-0">
        <div className="journey-top w-full px-[20px] lg:pl-[40px] text-left mb-[20px] lg:mb-[60px] relative z-[1]">
          <img
            className="hidden lg:block absolute top-[-47px] right-[2px] lg:w-[185px]  h-auto rounded-tr-[10px] z-[-1]"
            src={Abstract}
            alt="abstract image"
          />

          <div className="journey-top-texts w-[100%] md:w-[80%]">
            {!homepage ? (
              <>
                <h2 className="w-[100%] lg:w-[90%] text-[20px] lg:text-[40px] uppercase mb-[20px]">
                  Explore the Latest Trends and Timeless Classics
                </h2>
                <p className="opacity-60 text-[13px] lg:text-[15px]">
                  Dive into the world of fashion excellence at StyleLoom. Our
                  curated selection brings together the latest trends and
                  timeless classics.
                </p>
              </>
            ) : (
              <>
                <h2 className="w-[100%] lg:w-[76%] text-[20px] lg:text-[40px] uppercase mb-[20px]">
                  Elevate Your Style with Our Latest Collection
                </h2>
                <p className="opacity-60 text-[13px] lg:text-[15px]">
                  Each piece is crafted to enhance your fashion statement.
                </p>
              </>
            )}
          </div>
        </div>

        {!homepage && (
          <div className="bottom w-full items-center justify-center ">
            <div className="top-options flex m-0 w-[95%] items-center  justify-center sm:justify-start mb-[20px] lg:mb-[80px] sm:ml-[50px]">
              <div
                className={`button-shape  button ${
                  productType === "Unisex" ? "active" : ""
                }`}
                onClick={() => setProductType && setProductType("Unisex")}
              >
                Unisex
              </div>
              <div
                className={`button-shape button ${
                  productType === "Men" ? "active" : ""
                }`}
                onClick={() => setProductType && setProductType("Men")}
              >
                Men
              </div>
              <div
                className={`button-shape button ${
                  productType === "Women" ? "active" : ""
                }`}
                onClick={() => setProductType && setProductType("Women")}
              >
                Women
              </div>
              <div
                className={`button-shape button ${
                  productType === "Kids" ? "active" : ""
                }`}
                onClick={() => setProductType && setProductType("Kids")}
              >
                Kids
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPageTop;
