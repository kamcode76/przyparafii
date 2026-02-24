import type { ComponentType } from "react";
import LocationPage from "./pages/LocationPage";
import ServicePage from "./pages/ServicePage";
import SummaryPage from "./pages/SummaryPage";
import DashboardPage from "./pages/DashboardPage";

export type AppRoute = {
  path: string;
  Component: ComponentType;
};

export const routes: AppRoute[] = [
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
];
