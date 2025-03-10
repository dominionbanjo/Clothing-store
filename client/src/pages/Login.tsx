import { Form, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginAndRegister";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import axios from "axios";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useState } from "react";
import { getCartItems } from "../../features/cartSlice";
import { useAppDispatch } from "../hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    setLoading(true);
    try {
      await customFetch.post("auth/login", data);
      await dispatch(getCartItems());
      toast.success("Login Successful");
      navigate(-1);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.msg);
        } else if (error.request) {
          toast.error("No response from server");
        } else {
          toast.error("Request error");
        }
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Header />
      <MobileHeader />
      <div className="login-container">
        <Form
          id="login-form"
          method="post"
          className="login-form"
          onSubmit={handleSubmit}
        >
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
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
