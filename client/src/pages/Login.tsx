import { Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginAndRegister";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import axios from "axios";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("auth/login", data);
    toast.success("Login Successful");
    return redirect("/");
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
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Header />
      <MobileHeader />
      <div className="login-container">
        <Form id="login-form" method="post" className="login-form">
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
          <button type="submit">
            {" "}
            {isSubmitting ? "Logging in" : "Login"}
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};
export default Login;
