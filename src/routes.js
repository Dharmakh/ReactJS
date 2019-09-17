import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import App from "./App";
import UserDashboard from "./components/user-dashboard";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import NotFound from "./components/notfound";
import NavBar from "./components/nav-bar";
import APIComponent from "./components/api";
import Hooks from "./life-cycle-hooks/hooks";
import GetEmployees from './components/GetEmployees';
import HocComponent from "./components/hoc";
import reversedName from "./components/reverseHoc"
//import RegistrationForm from "./components/registration-form";

//RegistrationForm
const RegistrationForm = lazy(() => {
  return Promise.all([
    import("./components/registration-form"),
    new Promise(resolve => setTimeout(resolve, 300))
  ]).then(([moduleExports]) => moduleExports);
});


const Home1 = lazy(() => {
  return Promise.all([
    import("./components/home"),
    new Promise(resolve => setTimeout(resolve, 300))
  ]).then(([moduleExports]) => moduleExports);
});


const createRoutes = () => (
  <Switch>
    <Route exact path="/" component={UserDashboard} />
    <Route exact path="/home" component={Home1} />
    <Route exact path="/about/:id?/:name?" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/api" component={APIComponent} />
    <Route exact path="/hooks" component={Hooks} />
    <Route exact path="/regForm" component={RegistrationForm} />
    <Route exact path="/getEmp" component={GetEmployees} />   
    <Route exact path="/hoc" component={HocComponent} />  
    {/* <Route path="*" component={NotFound} /> */}{/* first way to not found page */}
    <Route exact path="/404" component={NotFound} />
    <Redirect from='*' to="/404" />{/* second way to not found page */}
  </Switch>
);

export default createRoutes;
