import useApiHandler from "../../../constants/controllers/apiHandler";
import { AxiosError } from "axios";
import { IProduct } from "../../../utils/types";

interface UpdateProductPayload {
  id: string;
  updates: Partial<IProduct>;
}

interface UpdateProductResponse {
  msg: string;
  product: IProduct;
}

const useUpdateProductController = () => {
  const { callApi, isLoading, isError, isSuccess } = useApiHandler<
    UpdateProductResponse,
    AxiosError,
    UpdateProductPayload
  >({
    endpoint: "", // dynamic (we’ll handle in call)
    method: "PATCH",
    isAuth: true,
    showSuccessToast: true,
    showErrorToast: true,
    queryKey: ["Products"],
  });

  // 👇 Wrapper to handle dynamic endpoint
  const updateProduct = async (payload: UpdateProductPayload) => {
    return callApi({
      ...payload,
      endpoint: `/products/${payload.id}`,
    } as any);
  };

  return {
    updateProduct,
    isUpdating: isLoading,
    isError,
    isSuccess,
  };
};

export default useUpdateProductController;
