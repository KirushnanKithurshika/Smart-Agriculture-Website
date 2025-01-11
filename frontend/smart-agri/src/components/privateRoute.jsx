import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext'; 
const PrivateRoute = () => {
  const { authState } = useAuth();

  
  if (!authState.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

 
  return <Outlet />;
};

export default PrivateRoute;
