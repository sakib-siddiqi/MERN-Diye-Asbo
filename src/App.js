import React from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import useFirebase from "./Hooks/useFirebase";
import DashBoard from "./Pages/Dashboard/DashBoard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Services from "./Pages/Services/Services";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import PrivateRoute from "./Shared/PrivateRoute/PrivateRoute";
function App() {
  const { loading } = useFirebase();
  return (
    <>
      {loading ? (
        <div className="center" style={{ height: "100vh" }}>
          <Spinner animation="grow" variant="dark" />
        </div>
      ) : (
        <>
          <AuthProvider>
            <BrowserRouter>
              <Header />
              <div style={{ minHeight: "60vh" }}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/services" component={Services} />
                  <Route path="/login" component={Login} />
                  <PrivateRoute path="/dashboard">
                    <DashBoard />
                  </PrivateRoute>
                  <Route path="/services/:_id" component={Services} />
                </Switch>
              </div>
              <Footer />
            </BrowserRouter>
          </AuthProvider>
        </>
      )}
    </>
  );
}
export default App;
