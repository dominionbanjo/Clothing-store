import useApiHandler from "../../../constants/controllers/apiHandler";
import { AxiosError } from "axios";
import { IProduct } from "../../../utils/types";

interface CreateProductPayload {
  image: string;
  category: string;
  subCategory: string;
  description: string;
  fit: string;
  price: number;
  sizes: string[];
  features: string[];
  featured?: boolean;
  user: string;
}

interface CreateProductResponse {
  msg: string;
  product: IProduct;
}

const useCreateProductController = () => {
  const { callApi, isLoading, isError, isSuccess } = useApiHandler<
    CreateProductResponse,
    AxiosError,
    CreateProductPayload
  >({
    endpoint: "/products",
    method: "POST",
    isAuth: true,
    showSuccessToast: true,
    showErrorToast: true,
    queryKey: ["Products"],
  });

  return {
    createProduct: callApi,
    isCreating: isLoading,
    isError,
    isSuccess,
  };
};

export default useCreateProductController;
