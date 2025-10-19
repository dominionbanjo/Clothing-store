import useApiHandler from "../../../constants/controllers/apiHandler";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  location: string;
}

export const useRegisterController = () => {
  const { callApi, isLoading, isError, data, error } = useApiHandler<
    any,
    AxiosError
  >({
    endpoint: "auth/register",
    method: "POST",
    isAuth: false,
    showSuccessToast: false, // we’ll control toasts manually
  });

  const register = async (payload: RegisterPayload) => {
    try {
      const response = await callApi(payload);
      toast.success("Registration Successful");
      return response;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response)
          toast.error(err.response.data?.msg || "Registration failed");
        else if (err.request) toast.error("No response from server");
        else toast.error("Request error");
      } else toast.error("An unknown error occurred");
      throw err;
    }
  };

  return { register, isLoading, isError, data, error };
};
