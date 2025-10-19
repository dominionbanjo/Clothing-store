import useApiHandler from "../../../constants/controllers/apiHandler";
import { AxiosError } from "axios";
import { IReview } from "../../../utils/types";

interface Review {
  reviews: IReview[];
}

export const useGetProductReviewsController = (id: string, enabled = true) => {
  const { callApi, data, isLoading, isSuccess, isError, error } = useApiHandler<
    Review,
    AxiosError
  >({
    endpoint: `/reviews/${id}/review`,
    method: "GET",
    queryKey: ["reviews", id],
    enabled: !!id && enabled,
    showSuccessToast: false,
    showErrorToast: false,
    onError: (err) => {
      if (
        (err as AxiosError)?.response?.status &&
        (err as AxiosError).response?.status === 404
      ) {
        return [];
      }
    },
  });

  const getReviews = async () => await callApi();

  return {
    getReviews,
    reviews: data?.reviews ?? [],
    isLoading,
    isSuccess,
    isError,
    error,
  };
};
