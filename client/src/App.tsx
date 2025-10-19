import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CartProvider } from "./context/cartContext";

import {
  HomeLayout,
  HomePage,
  ContactPage,
  AllProductsPage,
  ProductPage,
  ErrorPage,
  Login,
  Register,
  Profile,
} from "./pages";
import VerifyPayment from "./pages/VerifyPayments";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <AllProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },

      {
        path: "/verify",
        element: <VerifyPayment />,
      },
      { path: "orders", element: <OrdersPage /> },
      { path: "orders/:id", element: <OrderDetailsPage /> },
    ],
  },
  { path: "admin", element: <AdminDashboardPage /> },
  { path: "admin/products", element: <AdminProductsPage /> },
  { path: "admin/orders", element: <AdminOrdersPage /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
