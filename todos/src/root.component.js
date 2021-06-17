import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
export default function Root(props) {
  // return <section>{props.name} is mounted! learn single-spa</section>;
  return (
    <>
      <App />
      <BrowserRouter basename="/todos">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <Posts></Posts>
          </Route>
          <Route path="/">
            <Redirect to="/home"></Redirect>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
