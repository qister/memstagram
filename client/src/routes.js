import React from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AddPage } from "./pages/AddPage";
import { ShowPage } from "./pages/ShowPage";
import { AuthPage } from "./pages/AuthPage";
import { AuthContainer } from "./containers/AuthContainer";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/add" exact>
          <AddPage />
        </Route>
        <Route path="/show" exact>
          <ShowPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/">
        <AuthContainer />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
