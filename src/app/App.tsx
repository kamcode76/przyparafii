import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { HeroSection } from "./components/HeroSection";
import DashboardPage from "./pages/DashboardPage";

function WizardLayout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F9F8" }}>
      <div className="mx-auto min-h-screen max-w-7xl lg:grid lg:grid-cols-2">
        {/* Lewy panel - Hero, widoczny od lg w górę */}
        <div className="hidden lg:flex">
          <HeroSection />
        </div>

        {/* Prawy panel - zmieniane podstrony kreatora */}
        <div className="flex flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout kreatora z Hero po lewej */}
        <Route element={<WizardLayout />}>
          {routes
            .filter((route) => route.path !== "/dashboard")
            .map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
        </Route>

        {/* Osobny layout dla panelu klienta */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
