import useApiHandler from "../../../constants/controllers/apiHandler";
import { IReview } from "../../../utils/types";
import { AxiosError } from "axios";
import { queryClient } from "../../../App";
import { toast } from "react-toastify";

export interface CreateReviewPayload {
  product: string;
  title: string;
  comment: string;
  rating: number;
  author: string;
}

export const useCreateReviewController = (productId: string) => {
  const { callApi, isLoading, isSuccess, isError, error } = useApiHandler<
    IReview,
    AxiosError,
    CreateReviewPayload
  >({
    endpoint: "/reviews",
    method: "POST",
    queryKey: ["reviews", productId],
    isAuth: true,
    showSuccessToast: false,
  });

  const createReview = async (payload: CreateReviewPayload) => {
    const response = await callApi(payload);
    toast.success("Review added successfully");

    await queryClient.invalidateQueries({ queryKey: ["reviews", productId] });
    await queryClient.invalidateQueries({ queryKey: ["product", productId] });

    return response;
  };

  return {
    createReview,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};
