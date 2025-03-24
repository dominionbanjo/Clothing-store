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

import { action as registerAction } from "./pages/Register";
// import { action as loginAction } from "./pages/Login";
import { action as profileAction } from "./pages/Profile";
import { action as productPageAction } from "./pages/ProductPage";

// import { loader as homeLoader } from "./pages/HomeLayout";
import { loader as singleProductLoader } from "./pages/ProductPage";
// import { loader as homeProductsLoader } from "./components/HomePageProductsContainer";
// import { loader as productsLoader } from "./components/ProductsContainer";

const queryClient = new QueryClient({
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
    // action: loginAction,
  },
  {
    path: "register",
    element: <Register />,
    action: registerAction,
  },
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    // loader: homeLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        // loader: homeProductsLoader(queryClient),
      },
      {
        path: "products",
        element: <AllProductsPage />,
        // loader: productsLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <ProductPage />,
        action: productPageAction(queryClient),
        loader: singleProductLoader(queryClient),
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "profile",
        element: <Profile />,
        action: profileAction,
      },
    ],
  },
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
