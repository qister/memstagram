import React from 'react'
import {Switch, Route, Redirect, Router} from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { AddPage } from './pages/AddPage'
import { ShowPage } from './pages/ShowPage'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
          <Route path="/main" exact>
              <MainPage />
          </Route>
          <Route path="/add" exact>
              <AddPage />
          </Route>
          <Route path="/show" exact>
              <ShowPage />
          </Route>    
          <Redirect to="/main"/>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/">
        <AuthPage />
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}