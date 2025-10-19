import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

type OrderItem = {
  name: string;
  price: number;
  amount: number;
  image: string;
};

type Order = {
  _id: string;
  total: number;
  status: string;
  createdAt: string;
  orderItems: OrderItem[];
};

export default function OrdersPage() {
  const navigate = useNavigate();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axios.get<{ orders: Order[] }>("/api/v1/orders");
      return res.data.orders;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-2 border-gray-400 rounded-full border-t-primary animate-spin"></div>
        <p className="ml-3 text-lg">Loading your orders...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="mb-2 text-2xl font-semibold text-red-500">
          Could not fetch your orders
        </h1>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 mt-4 text-white bg-gray-800 rounded hover:bg-gray-900"
        >
          Try Again
        </button>
      </div>
    );
  }

  const orders = data || [];

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="mb-2 text-2xl font-semibold">No Orders Yet</h1>
        <p className="mb-4 text-gray-500">
          You haven’t made any purchases yet.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="px-4 py-2 text-white rounded bg-primary hover:bg-primary/80"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Your Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            onClick={() => navigate(`/orders/${order._id}`)} // ✅ Navigate to order details
            className="p-5 transition-all duration-200 bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Order Date: {format(new Date(order.createdAt), "PPP")}
                </p>
                <p className="text-sm text-gray-500">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      order.status === "paid"
                        ? "text-green-600"
                        : order.status === "pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.status.toUpperCase()}
                  </span>
                </p>
              </div>
              <p className="mt-3 text-lg font-bold text-gray-700 md:mt-0">
                ₦{order.total.toLocaleString()}
              </p>
            </div>

            <div className="divide-y">
              {order.orderItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3"
                >
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
        ))}
      </div>
    </div>
  );
}
