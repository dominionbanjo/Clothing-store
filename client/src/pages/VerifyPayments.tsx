import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export default function VerifyPayment() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const reference = searchParams.get("reference");

  // React Query: verify payment
  const { data, isLoading, isError, error, refetch, isSuccess } = useQuery({
    queryKey: ["verifyPayment", reference],
    enabled: !!reference,
    queryFn: async () => {
      const res = await axios.get(
        `/api/v1/orders/verify/payment?reference=${reference}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    // Automatically verify once the reference is available
    if (reference) refetch();
  }, [reference, refetch]);

  // State renderers
  if (!reference) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center">
        <div>
          <h1 className="mb-2 text-2xl font-bold">Missing Payment Reference</h1>
          <p className="text-gray-500">No payment reference found in URL.</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
        <p className="ml-4 text-lg">Verifying payment...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="mb-2 text-2xl font-semibold text-red-500">
          Verification Failed
        </h1>
        <p className="mb-6 text-gray-600">
          {axios.isAxiosError(error)
            ? error.response?.data?.msg || "Unable to verify payment"
            : "Something went wrong."}
        </p>
        <button
          onClick={() => navigate("/products")}
          className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-900"
        >
          Back to Products
        </button>
      </div>
    );
  }

  if (isSuccess && data?.paymentData?.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="mb-2 text-3xl font-bold text-green-600">
          Payment Verified ✅
        </h1>
        <p className="mb-4 text-gray-600">
          Your transaction was successful! Reference:{" "}
          <span className="font-mono">{reference}</span>
        </p>
        <button
          onClick={() => navigate("/orders")}
          className="px-4 py-2 text-white rounded bg-primary hover:bg-primary/80"
        >
          Go to Orders
        </button>
      </div>
    );
  }

  // Fallback for any other status
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="mb-2 text-2xl font-semibold text-yellow-600">
        Payment Pending
      </h1>
      <p className="mb-4 text-gray-600">
        We couldn’t confirm this payment yet. Reference:{" "}
        <span className="font-mono">{reference}</span>
      </p>
      <button
        onClick={() => refetch()}
        className="px-4 py-2 text-white rounded bg-primary hover:bg-primary/80"
      >
        Retry Verification
      </button>
    </div>
  );
}
