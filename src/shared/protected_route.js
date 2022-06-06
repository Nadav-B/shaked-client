import { useAuth } from "./auth";
import Error from "../elements/Error";
export const ProtectRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Error errorDescription={"התחבר מחדש"} />;
  }
  return children;
};
