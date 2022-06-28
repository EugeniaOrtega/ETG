import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";
export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (!user) return <Navigate to="/inicio" />;
  if (loading) return <div> Cargando... </div>;
  return <> {children} </>;
}
