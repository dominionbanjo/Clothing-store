import { Link, useLocation } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/Images/not-found.svg";

interface RouteError extends Error {
  status?: number;
}

const Error = () => {
  const location = useLocation();
  const error = location.state as RouteError;

  if (error?.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Oops! Page not found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  if (error?.status === 500) {
    return (
      <Wrapper>
        <div>
          <h3>Oops! Something went wrong</h3>
          <p>
            {error.message || "Internal Server Error. Please try again later."}
          </p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
