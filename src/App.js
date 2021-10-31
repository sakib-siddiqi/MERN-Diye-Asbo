import React from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import useFirebase from "./Hooks/useFirebase";
import DashBoard from "./Pages/Dashboard/DashBoard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import PrivateRoute from "./Shared/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/404/NotFound";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import DataProvider from "./Context/DataProvider";
function App() {
  const { loading } = useFirebase();
  return (
    <>
      {loading ? (
        <div className="center" style={{ height: "100vh" }}>
          <Spinner animation="grow" variant="dark" />
        </div>
      ) : (
        <AuthProvider>
          <DataProvider>
            <BrowserRouter>
              <Header />
              <div style={{ minHeight: "60vh" }}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <PrivateRoute path="/dashboard">
                    <DashBoard />
                  </PrivateRoute>
                  <PrivateRoute path="/service/:service_route">
                    <PlaceOrder />
                  </PrivateRoute>
                  <Route path="*" component={NotFound} />
                </Switch>
              </div>
              <Footer />
            </BrowserRouter>
          </DataProvider>
        </AuthProvider>
      )}
    </>
  );
}
export default App;
