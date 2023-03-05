import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

function Auth() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export { Auth };
