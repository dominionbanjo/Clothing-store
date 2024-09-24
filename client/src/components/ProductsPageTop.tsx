import Abstract from "../assets/Images/Abstract2.png";
import Wrapper from "../assets/wrappers/ProductsPageTop";

const ProductsPageTop = ({ homepage }: { homepage: boolean }) => {
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
        <div className="journey-bottom">
          <div className="top-options">
            <div className="button-shape button">Unisex</div>
            <div className="button-shape button">Men</div>
            <div className="button-shape button active">Women</div>
            <div className="button-shape button">Kids</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductsPageTop;
