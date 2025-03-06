import Abstract from "../assets/Images/Abstract2.png";
import Wrapper from "../assets/wrappers/ProductsPageTop";
import { useProductsContext } from "../pages/HomeLayout";

const ProductsPageTop = ({ homepage }: { homepage: boolean }) => {
  let productType: string | undefined;
  let setProductType: ((type: string) => void) | undefined;

  if (!homepage) {
    ({ productType, setProductType } = useProductsContext());
  }

  return (
    <Wrapper $homepage={homepage}>
      <div className="journey">
        <div className="journey-top">
          <img src={Abstract} alt="abstract image" />

          <div className="journey-top-texts">
            {!homepage ? (
              <>
                <h2>Explore the Latest Trends and Timeless Classics</h2>
                <p>
                  Dive into the world of fashion excellence at StyleLoom. Our
                  curated selection brings together the latest trends and
                  timeless classics.
                </p>
              </>
            ) : (
              <>
                <h2>Elevate Your Style with Our Latest Collection</h2>
                <p>Each piece is crafted to enhance your fashion statement.</p>
              </>
            )}
          </div>
        </div>

        {!homepage && (
          <div className="journey-bottom">
            <div className="top-options">
              <div
                className={`button-shape button ${
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
    </Wrapper>
  );
};

export default ProductsPageTop;
