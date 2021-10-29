import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import DashBoard from "./Pages/Dashboard/DashBoard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Services from "./Pages/Services/Services";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <div style={{ minHeight: "60vh" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/services/:_id" component={Services} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
