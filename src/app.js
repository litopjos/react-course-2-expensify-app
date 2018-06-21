import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import Routes, {history} from "./routers/AppRouter.js";
import {addExpense} from "./actions/actions-expenses.js";
import {login,logout} from "./actions/actions-auth"
import {startSetExpenses} from "./actions/actions-expenses.js";
import {setTextFilter} from "./actions/actions-filters.js";
import getVisibleExpenses from "./selectors/selector-expenses";
import {firebase} from  "./firebase/firebase.js";

import "normalize.css/normalize.css";
import "./styles/style.scss";
import configureStore from "./store/createStore";

const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    console.log(state);

    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})

const jsx = (
    <Provider store = {store} >
       <Routes/>
    </Provider>
);

let hasRendered = false;
const renderApp = ()=>{
    if (!hasRendered) {
        //Show Header and enable routes.
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    } 
}

// Output 'loading' message.
ReactDOM.render(<h1>Loading...</h1>, document.getElementById('app'));


// Event handler for when user authentication state has changed.
firebase.auth().onAuthStateChanged(
    (user)=>{
        if (user) {

            alert("User logged IN");

            store.dispatch(login(user.uid))

            // This means user has logged in.
            // Initialize / reload  store with contents of the database associated with the user.
            store.dispatch(startSetExpenses())
            .then(
                // This means the database read was successful.
                ()=>{
                    // Initialize the routes and show the header.
                    renderApp();

                    if (history.location.pathname === '/') {
                        // This means the current page is the login page.
                        // Redirect to the dashboard page.
                        history.push('/dashboard');
                    }
                }
            )


        } else {
            alert("User logged OUT. Redirecting back to login page");

            store.dispatch(logout());
            
            renderApp();
            // Redirect to the login page
            history.push('/');
        }

    }
)

/*
// Initialize store with contents of the database.
store.dispatch(startSetExpenses())
    .then(
        ()=>{
            ReactDOM.render(jsx, document.getElementById('app'));
        }
    )
    .catch((e)=>{
        alert(e);
    });

*/




