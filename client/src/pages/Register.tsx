import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginAndRegister";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import { useState } from "react";
import { countries } from "../utils/countries";
import { useRegisterController } from "../modules/auth/controllers/registerUserController";

const Register = () => {
  const navigate = useNavigate();
  const { register, isLoading } = useRegisterController();
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const payload = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      location: formData.get("location") as string,
    };

    await register(payload);
    navigate("/login");
  };

  return (
    <Wrapper>
      <Header />
      <MobileHeader />
      <div className="login-container">
        <form id="register-form" className="login-form" onSubmit={handleSubmit}>
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

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;
