import { Form, useNavigation, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/ProfilePage";
import FormRow from "../components/FormRow";
import { useAppSelector, useAppDispatch } from "../hooks";
import { logout, updateUser } from "../../features/userSlice";
import { clearCartOnLogout } from "../../features/cartSlice";
// import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { store } from "../store";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const file = (formData.get("avatar") as File) || null;
  if (file && file.size > 500_000) {
    toast.error("Image size must be less than 0.5MB");
    return new Response(null, { status: 400 });
  }
  try {
    await store.dispatch(updateUser(formData));
    toast.success("Profile updated successfully");
    return new Response(null, { status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMsg = error.response?.data?.msg || "An unknown error occurred";
      toast.error(errorMsg);
      return new Response(null, { status: error.response?.status || 500 });
    }
    toast.error("An unknown error occurred");
    return new Response(null, { status: 500 });
  }
};

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, userLoading } = useAppSelector((store) => store.user);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  //   useEffect(() => {
  //     if (!user) {
  //       toast.success("Logout Successful");
  //       navigate("/");
  //     }
  //   }, [user, navigate]);

  // const handleLogout = async () => {
  //   const resultAction = await dispatch(logout());
  //   if (logout.fulfilled.match(resultAction)) {
  //     navigate(-1);
  //   }
  //   await dispatch(clearCart());
  // };
  const handleLogout = async () => {
    const resultAction = await dispatch(logout());

    if (logout.fulfilled.match(resultAction)) {
      navigate(-1);
      await dispatch(clearCartOnLogout()); // Only clears cart after successful logout
    }
  };

  if (userLoading) {
    return <p>Loading user data...</p>;
  }

  return (
    <Wrapper>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <Form method="post" encType="multipart/form-data">
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
          <FormRow
            type="text"
            name="fullName"
            labelText="Full name"
            defaultValue={user?.fullName || ""}
          />
          <FormRow type="email" name="email" defaultValue={user?.email} />
          <FormRow
            type="text"
            name="location"
            defaultValue={user?.location || ""}
          />
          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
