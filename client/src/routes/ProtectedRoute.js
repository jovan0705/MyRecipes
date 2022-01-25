import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const access_token = localStorage.getItem('access_token')
    if (!access_token) {
        return <Navigate to='/login' />
    } else {
        return children
    }
};

export const ProtectedLogin = ({ children }) => {
  const access_token = localStorage.getItem('access_token')
  if (access_token) {
      return <Navigate to='/' />
  } else {
      return children
  }
} 


