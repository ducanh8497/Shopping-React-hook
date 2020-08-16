import React from "react";
import "./App.css";
import TopBar from "./components/layout/topBar";
import ListProduct from "./components/layout/listProduct";
import SignIn from "./pages/account/sign-in";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./pages/account/sign-up";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
