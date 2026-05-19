import { Navigate, Outlet, useLocation } from "react-router";

export default function ProtectedRoute() {
  const location = useLocation();
  const isAuthenticated =
    localStorage.getItem("chefnest-auth") === "true" ||
    Boolean(localStorage.getItem("chefnest-token"));

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
