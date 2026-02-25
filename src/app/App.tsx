import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import OrderPage from "./pages/client/OrderPage";
import MyOrdersPage from "./pages/client/MyOrdersPage";
import OrderDetailPage from "./pages/client/OrderDetailPage";
import ExecutorDashboardPage from "./pages/executor/ExecutorDashboardPage";
import ExecutorOrderDetailPage from "./pages/executor/ExecutorOrderDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/zamow",
    Component: OrderPage,
  },
  {
    path: "/moje-zlecenia",
    Component: MyOrdersPage,
  },
  {
    path: "/zlecenie/:id",
    Component: OrderDetailPage,
  },
  {
    path: "/panel-wykonawcy",
    Component: ExecutorDashboardPage,
  },
  {
    path: "/panel-wykonawcy/zlecenie/:id",
    Component: ExecutorOrderDetailPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}