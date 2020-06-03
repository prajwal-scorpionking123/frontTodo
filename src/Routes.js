
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./Auth/Signup"
import Signin from "./Auth/Signin"
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/signup" exact component={Signup} />
        <Route path="/user/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;


