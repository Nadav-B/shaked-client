import Login from "../elements/Login";
import { useAuth } from "../shared/auth";

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Login />;
  }
  return children;
};
