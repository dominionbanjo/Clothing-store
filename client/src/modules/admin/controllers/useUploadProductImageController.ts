import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export interface UploadResponse {
  msg: string;
  imageUrl: string;
  publicId: string;
}

export const useUploadProductImageController = () => {
  const mutation = useMutation<UploadResponse, AxiosError, FormData>({
    mutationFn: async (formData) => {
      const response = await axios.post<UploadResponse>(
        "/api/v1/upload/product", // ✅ same endpoint as before
        formData,
        {
          withCredentials: true, // include cookies if needed
          headers: {
            // ✅ Let Axios handle boundary, don’t manually add content-type
            Accept: "application/json",
          },
        }
      );
      return response.data;
    },
  });

  return {
    uploadImage: mutation.mutateAsync,
    isUploading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data,
  };
};

export default useUploadProductImageController;
