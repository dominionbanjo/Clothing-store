import useApiHandler from "../../../constants/controllers/apiHandler";
import { IProduct } from "../../../utils/types";

interface Product {
  product: IProduct;
}

export const useGetProductController = (id: string) => {
  const { data, isLoading, isError } = useApiHandler<Product>({
    endpoint: `/products/${id}`,
    method: "GET",
    queryKey: ["product", id],
  });

  return {
    product: data?.product,
    isLoading,
    isError,
  };
};
