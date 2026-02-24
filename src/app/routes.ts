import { createBrowserRouter } from "react-router";
import LocationPage from "./pages/LocationPage";
import ServicePage from "./pages/ServicePage";
import SummaryPage from "./pages/SummaryPage";
import DashboardPage from "./pages/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LocationPage,
  },
  {
    path: "/service",
    Component: ServicePage,
  },
  {
    path: "/summary",
    Component: SummaryPage,
  },
  {
    path: "/dashboard",
    Component: DashboardPage,
  },
]);
