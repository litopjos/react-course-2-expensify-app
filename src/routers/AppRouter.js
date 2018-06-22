
import AddExpensePage from "../components/AddExpensePage";
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import EditExpensePage from "../components/EditExpensePage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import LoginPage from "../components/LoginPage.js"
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "../routers/PrivateRoute";

import React from 'react';

export const history = createHistory();

// NOTE: By using <Router> instead of <BrowserRouter> we now have history() accessible to any module willing to import it.

const AppRouter = ()=>(
    <Router history = {history}>
        <div>
            <Switch>
                <Route path="/" component = {LoginPage} exact = {true}/>
                <PrivateRoute path="/dashboard" component = {ExpenseDashboardPage} exact = {true}/>           
                <PrivateRoute path="/create" component = {AddExpensePage} />
                <PrivateRoute path="/edit/:id" component = {EditExpensePage} />
                <Route path="/help" component = {HelpPage} />
                <Route component = {NotFoundPage} />
            </Switch>
        </div>
    </Router>
);


export default AppRouter;