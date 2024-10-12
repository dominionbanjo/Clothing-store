import { Form, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginAndRegister";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import { useState } from "react";
import { countries } from "../utils/countries";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import axios from "axios";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("auth/register", data);
    toast.success("Registration Successful");
    return redirect("/login");
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

const Register = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <Wrapper>
      <Header />
      <MobileHeader />
      <div className="login-container">
        <Form id="login-form" className="login-form" method="post">
          <h2>Register</h2>
          <input type="text" name="fullName" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <div className="location-field">
            <label htmlFor="location">Location: </label>
            <select
              name="location"
              value={selectedCountry}
              onChange={handleSelect}
              required
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
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
