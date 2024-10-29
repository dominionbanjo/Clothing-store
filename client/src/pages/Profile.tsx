import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/ProfilePage";
import FormRow from "../components/FormRow";
import { useAppSelector, useAppDispatch } from "../hooks";
import { logout, fetchUser } from "../../features/userSlice";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((store) => store.user);
  console.log(user);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  if (loading) {
    return <p>Loading user data...</p>;
  }

  return (
    <Wrapper>
      <button className="logout-button" onClick={() => dispatch(logout())}>
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
          profile
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
            {isSubmitting ? "submitting" : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
