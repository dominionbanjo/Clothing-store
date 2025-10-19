import { Link } from "react-router-dom";

export default function AdminDashboardPage() {
  return (
    <div className="max-w-5xl p-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Link
          to="/admin/products"
          className="p-6 text-center transition border rounded-lg hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold text-primary">
            Manage Products
          </h2>
          <p className="mt-2 text-gray-500">
            Create, edit, and remove store products.
          </p>
        </Link>

        <Link
          to="/admin/orders"
          className="p-6 text-center transition border rounded-lg hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold text-primary">Manage Orders</h2>
          <p className="mt-2 text-gray-500">
            View all user orders and update statuses.
          </p>
        </Link>
      </div>
    </div>
  );
}
