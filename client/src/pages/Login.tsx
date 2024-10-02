import { Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginAndRegister";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";

const Login = () => {
  return (
    <Wrapper>
      <Header />
      <MobileHeader />
      <div className="login-container">
        <Form id="login-form" className="login-form">
          <h2>Login</h2>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <p>
            Don't have an account?
            <a className="aa" href="/register">
              {" "}
              Register
            </a>
          </p>
          <button type="submit">Login</button>
        </Form>
      </div>
    </Wrapper>
  );
};
export default Login;
