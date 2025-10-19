import {
  useMutation,
  useQuery,
  useQueryClient,
  UseMutationResult,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";
import { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { customAuthFetch } from "../api/customAuthFetch";

/* ------------------------- Interfaces ------------------------- */
export interface ApiHandlerOptions<
  TData,
  TError,
  TVariables = Record<string, any>
> {
  endpoint: string;
  queryKey?: string | string[];
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  isAuth?: boolean;
  showSuccessToast?: boolean;
  showErrorToast?: boolean;
  enabled?: boolean;
  contentType?: string | null;
  defaultParams?: TVariables;
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}

export interface ApiHandlerReturn<TData, TError, TVariables> {
  callApi: (details?: TVariables) => Promise<TData>;
  data: TData | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: TError | null;
  mutation?: UseMutationResult<TData, TError, TVariables>;
  query?: UseQueryResult<TData, TError>;
}

/* ---------------------------- Main Hook ---------------------------- */
const useApiHandler = <
  TData = unknown,
  TError = Error,
  TVariables = Record<string, any>
>({
  endpoint,
  queryKey,
  method = "POST",
  isAuth = false,
  showSuccessToast = true,
  showErrorToast = true,
  enabled = true,
  contentType = "application/json",
  defaultParams,
  onSuccess,
  onError,
}: ApiHandlerOptions<TData, TError, TVariables>): ApiHandlerReturn<
  TData,
  TError,
  TVariables
> => {
  const queryClient = useQueryClient();
  const axiosInstance: AxiosInstance = isAuth ? customAuthFetch() : customFetch;

  /* ------------------------ API Controller ------------------------ */
  const apiController = async (details?: TVariables): Promise<TData> => {
    try {
      let response: AxiosResponse<any>;

      // 🧠 Smart detection of FormData
      const isFormData =
        typeof FormData !== "undefined" && details instanceof FormData;

      // Let Axios set multipart boundaries automatically
      const config = isFormData
        ? {}
        : contentType
        ? { headers: { "Content-Type": contentType } }
        : {};

      switch (method.toUpperCase()) {
        case "GET":
          response = await axiosInstance.get(endpoint, {
            params: { ...(defaultParams || {}), ...(details || {}) },
            ...config,
          });
          break;
        case "POST":
          response = await axiosInstance.post(endpoint, details, config);
          break;
        case "PUT":
          response = await axiosInstance.put(endpoint, details, config);
          break;
        case "PATCH":
          response = await axiosInstance.patch(endpoint, details, config);
          break;
        case "DELETE":
          response = await axiosInstance.delete(endpoint, {
            data: details,
            ...config,
          });
          break;
        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }

      const result = response.data;
      const payload = result?.data ?? result;

      if (showSuccessToast && result?.message) toast.success(result.message);
      onSuccess?.(payload);

      return payload as TData;
    } catch (error) {
      const axiosError = error as AxiosError<any>;
      const errMsg =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Unexpected error occurred";

      if (showErrorToast) toast.error(errMsg);
      onError?.(error as TError);

      throw error as TError;
    }
  };

  /* -------------------------- Mutations -------------------------- */
  const mutation = useMutation<TData, TError, TVariables>({
    mutationFn: apiController,
    onSuccess: (response) => {
      onSuccess?.(response);
      if (queryKey) {
        const keys = Array.isArray(queryKey) ? queryKey : [queryKey];
        keys.forEach((key) =>
          queryClient.invalidateQueries({ queryKey: [key] })
        );
      }
    },
  });

  /* -------------------------- Queries -------------------------- */
  const query =
    method.toUpperCase() === "GET" && queryKey
      ? useQuery<TData, TError>({
          queryKey: Array.isArray(queryKey)
            ? (queryKey as QueryKey)
            : [queryKey],
          queryFn: () => apiController(defaultParams),
          enabled: Boolean(endpoint) && enabled,
          refetchOnWindowFocus: false,
          retry: 1,
        })
      : undefined;

  /* -------------------------- Unified Helpers -------------------------- */
  const callApi = async (details?: TVariables): Promise<TData> =>
    method === "GET"
      ? await apiController(details)
      : mutation.mutateAsync(details as TVariables);

  const data = (query?.data ?? mutation.data) as TData | undefined;
  const isQuery = method.toUpperCase() === "GET";

  return {
    callApi,
    data,
    isLoading: isQuery
      ? !!query && (query.isLoading || query.isFetching)
      : !!mutation && mutation.isPending,
    isSuccess: isQuery ? !!query?.isSuccess : !!mutation?.isSuccess,
    isError: isQuery ? !!query?.isError : !!mutation?.isError,
    error: (isQuery ? query?.error : mutation?.error) ?? null,
    mutation,
    query,
  };
};

export default useApiHandler;
