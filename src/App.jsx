import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import appRoutes from "./routes/app/AppRoutes";
import { authRoutes } from "./routes/authentication/AutheticationRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      {appRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.url}
          element={<route.page />}
        />
      ))}
      </Route>

      <Route path="auth" element={<AuthLayout />}>      
      {authRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.url}
          element={<route.page />}
        />
      ))}
      </Route>

      <Route
        path="*"
        element={<div className="text-7xl">Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;
