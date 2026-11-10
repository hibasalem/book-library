import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (isAuthenticated) return <Navigate to={from} replace />;

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Login</h2>
      <p>You must log in to view this page.</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}
