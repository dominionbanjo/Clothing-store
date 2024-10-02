import { Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginAndRegister";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";

const Register = () => {
  return (
    <Wrapper>
      <Header />
      <MobileHeader />
      <div className="login-container">
        <Form id="login-form" className="login-form">
          <h2>Register</h2>
          <input
            type="text"
            name="first-name"
            placeholder="First name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <p>
            Already have an account?
            <a className="aa" href="/login">
              {" "}
              Login
            </a>
          </p>
          <button type="submit">Register</button>
        </Form>
      </div>
    </Wrapper>
  );
};
export default Register;
