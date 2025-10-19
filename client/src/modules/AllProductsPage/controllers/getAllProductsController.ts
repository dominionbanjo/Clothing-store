import useApiHandler from "../../../constants/controllers/apiHandler";
import { AxiosError } from "axios";
import { IProductsResponse } from "../models/product";

interface ProductQueryParams {
  featured?: boolean;
}
const useGetAllProductsController = (params?: ProductQueryParams) => {
  const { callApi, data, isLoading, isError } = useApiHandler<
    IProductsResponse,
    AxiosError,
    ProductQueryParams
  >({
    endpoint: "/products",
    method: "GET",
    queryKey: ["Products", JSON.stringify(params ?? {})],
    isAuth: false,
    enabled: true,
    showSuccessToast: false,
    defaultParams: params,
  });

  return {
    getAllProducts: callApi,
    products: data?.products ?? [],
    count: data?.count ?? 0,
    isLoading,
    isError,
  };
};

export default useGetAllProductsController;
