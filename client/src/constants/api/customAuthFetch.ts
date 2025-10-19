import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { logout } from "../../../features/userSlice";

const baseURL = "/api/v1";

export const customAuthFetch = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.user);

  const AxiosWithAuth = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  AxiosWithAuth.interceptors.request.use(
    (config) => {
      if (!user) {
        console.warn(" No logged-in user detected, request may fail auth");
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  AxiosWithAuth.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error.response?.status;

      if (status === 401) {
        console.log("Session expired, redirecting to login...");
        dispatch(logout());
        window.location.href = "/auth/login";
      }

      return Promise.reject(error);
    }
  );

  return AxiosWithAuth;
};
