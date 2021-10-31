import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { loading } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loading ? (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
};

export default PrivateRoute;
