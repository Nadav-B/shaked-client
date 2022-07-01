import { useAuth } from "./auth";
import Login from "../elements/Login";
export const ProtectRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return (
        <Login />
    );
  }
  return children;
};
