import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { AddPage } from './pages/AddPage'
import { ShowPage } from './pages/ShowPage'

export const useRoutes = () => {
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
        </Switch>
    )
}