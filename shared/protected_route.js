import Login from "../elements/login";
import { useAuth } from "../shared/auth";

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, login } = useAuth();
  if (!isAuthenticated) {
    return <Login login={login} />;
  }
  return children;
};
