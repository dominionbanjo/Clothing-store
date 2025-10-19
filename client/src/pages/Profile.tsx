import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/ProfilePage";
import FormRow from "../components/FormRow";
import { useAppSelector, useAppDispatch } from "../hooks";
import { logout, updateUser } from "../../features/userSlice";
import { clearCartOnLogout } from "../../features/cartSlice";
import { toast } from "react-toastify";
import axios from "axios";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, userLoading } = useAppSelector((store) => store.user);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ---------------------------- Logout Handler ---------------------------- */
  const handleLogout = async () => {
    const resultAction = await dispatch(logout());
    if (logout.fulfilled.match(resultAction)) {
      await dispatch(clearCartOnLogout());
      navigate(-1);
      toast.success("Logout successful");
    }
  };

  /* ---------------------------- Form Submit ---------------------------- */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const formData = new FormData(e.currentTarget);
      const file = (formData.get("avatar") as File) || null;

      if (file && file.size > 500_000) {
        toast.error("Image size must be less than 0.5MB");
        setIsSubmitting(false);
        return;
      }

      const resultAction = await dispatch(updateUser(formData));

      if (updateUser.fulfilled.match(resultAction)) {
        toast.success("Profile updated successfully");
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.msg || "An unknown error occurred";
        toast.error(errorMsg);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------------------- Loading State ---------------------------- */
  if (userLoading) {
    return (
      <p className="py-10 text-center text-gray-500">Loading user data...</p>
    );
  }

  /* ---------------------------- Render ---------------------------- */
  return (
    <Wrapper>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h1
          style={{
            textAlign: "center",
            color: "grey",
            textTransform: "capitalize",
            marginBottom: "25px",
          }}
        >
          Profile
        </h1>

        <div className="form-center">
          {/* Avatar Upload */}
          <div className="form-row">
            <label htmlFor="avatar" className="label">
              Select an image file (max 0.5 MB)
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>

          {/* Full Name */}
          <FormRow
            type="text"
            name="fullName"
            labelText="Full name"
            defaultValue={user?.fullName || ""}
          />

          {/* Email */}
          <FormRow
            type="email"
            name="email"
            labelText="Email"
            defaultValue={user?.email || ""}
          />

          {/* Location */}
          <FormRow
            type="text"
            name="location"
            labelText="Location"
            defaultValue={user?.location || ""}
          />

          {/* Submit Button */}
          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
