import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

type OrderItem = {
  name: string;
  price: number;
  amount: number;
  image: string;
};

type Order = {
  _id: string;
  total: number;
  subTotal: number;
  shippingFee: number;
  tax?: number;
  status: string;
  createdAt: string;
  orderItems: OrderItem[];
  reference?: string;
  paymentUrl?: string;
  paymentIntentId?: string;
  clientSecret?: string;
};

export default function OrderDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["order", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axios.get<{ order: Order }>(`/api/v1/orders/${id}`);
      return res.data.order;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-t-2 border-b-2 border-gray-400 rounded-full border-t-primary animate-spin"></div>
        <p className="ml-3 text-lg">Loading order details...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="mb-2 text-2xl font-semibold text-red-500">
          Unable to load this order
        </h1>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 mt-4 text-white bg-gray-800 rounded hover:bg-gray-900"
        >
          Try Again
        </button>
        <button
          onClick={() => navigate("/orders")}
          className="px-4 py-2 mt-3 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
        >
          Back to Orders
        </button>
      </div>
    );
  }

  const order = data;

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <button
        onClick={() => navigate("/orders")}
        className="px-3 py-1 mb-4 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
      >
        ← Back to Orders
      </button>

      <h1 className="mb-4 text-3xl font-bold">Order Details</h1>

      <div className="p-5 mb-6 bg-white border rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Order ID: <span className="font-mono">{order._id}</span>
            </p>
            <p className="text-sm text-gray-500">
              Reference:{" "}
              <span className="font-mono">{order.reference || "—"}</span>
            </p>
            <p className="text-sm text-gray-500">
              Created: {format(new Date(order.createdAt), "PPpp")}
            </p>
          </div>

          <div className="mt-3 text-right md:mt-0">
            <p className="text-lg font-bold text-gray-800">
              ₦{order.total.toLocaleString()}
            </p>
            <p
              className={`text-sm font-semibold ${
                order.status === "paid"
                  ? "text-green-600"
                  : order.status === "pending"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {order.status.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 mb-6 sm:grid-cols-2">
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-gray-700">
            Payment Info
          </h2>
          <p className="text-sm text-gray-600">
            Payment URL:{" "}
            {order.paymentUrl ? (
              <a
                href={order.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Payment
              </a>
            ) : (
              "—"
            )}
          </p>
        </div>

        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-gray-700">
            Cost Breakdown
          </h2>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Subtotal: ₦{order.subTotal.toLocaleString()}</li>
            <li>Tax: ₦{(order.tax || 0).toLocaleString()}</li>
            <li>Shipping Fee: ₦{order.shippingFee.toLocaleString()}</li>
            <li className="font-semibold text-gray-800">
              Total: ₦{order.total.toLocaleString()}
            </li>
          </ul>
        </div>
      </div>

      <div className="p-5 bg-white border rounded-lg shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">Items</h2>
        <div className="divide-y">
          {order.orderItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-16 h-16 border rounded-md"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    ₦{item.price.toLocaleString()} × {item.amount}
                  </p>
                </div>
              </div>
              <p className="font-medium text-gray-700">
                ₦{(item.price * item.amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
