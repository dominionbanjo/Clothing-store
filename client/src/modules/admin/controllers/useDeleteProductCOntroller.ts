import useApiHandler from "../../../constants/controllers/apiHandler";
import { AxiosError } from "axios";

interface DeleteProductPayload {
  id: string;
}

interface DeleteProductResponse {
  msg: string;
}

const useDeleteProductController = () => {
  const { callApi, isLoading, isError, isSuccess } = useApiHandler<
    DeleteProductResponse,
    AxiosError,
    DeleteProductPayload
  >({
    endpoint: "",
    method: "DELETE",
    isAuth: true,
    showSuccessToast: true,
    showErrorToast: true,
    queryKey: ["Products"],
  });

  const deleteProduct = async (payload: DeleteProductPayload) => {
    return callApi({
      ...payload,
      endpoint: `/products/${payload.id}`,
    } as any);
  };

  return {
    deleteProduct,
    isDeleting: isLoading,
    isError,
    isSuccess,
  };
};

export default useDeleteProductController;
