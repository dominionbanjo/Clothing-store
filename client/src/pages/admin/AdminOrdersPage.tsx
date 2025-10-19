import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";

interface Order {
  _id: string;
  total: number;
  status: string;
  createdAt: string;
  user: { name: string; email: string };
}

export default function AdminOrdersPage() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const res = await axios.get("/api/v1/orders/admin/all");
      return res.data.orders;
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      await axios.patch(`/api/v1/orders/${id}`, { status });
    },
    onSuccess: () => refetch(),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading orders...</p>
      </div>
    );
  }

  const orders = data || [];

  return (
    <div className="max-w-6xl p-8 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">All Orders</h1>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="text-left bg-gray-100">
            <tr>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: Order) => (
              <tr key={order._id} className="border-t">
                <td className="px-4 py-3">{order.user?.name || "—"}</td>
                <td className="px-4 py-3">₦{order.total.toLocaleString()}</td>
                <td className="px-4 py-3 capitalize">{order.status}</td>
                <td className="px-4 py-3">
                  {format(new Date(order.createdAt), "PPP")}
                </td>
                <td className="px-4 py-3">
                  <select
                    className="px-2 py-1 border rounded"
                    value={order.status}
                    onChange={(e) =>
                      updateStatus.mutate({
                        id: order._id,
                        status: e.target.value,
                      })
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="delivered">Delivered</option>
                    <option value="canceled">Canceled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
