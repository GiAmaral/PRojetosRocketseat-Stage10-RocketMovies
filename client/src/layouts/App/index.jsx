import { useAuth } from "../../hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

function App() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return <Outlet />;
}

export { App };
