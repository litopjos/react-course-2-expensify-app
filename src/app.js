import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import Routes from "./routers/AppRouter.js";
import {addExpense} from "./actions/actions-expenses.js";
import {startSetExpenses} from "./actions/actions-expenses.js";
import {setTextFilter} from "./actions/actions-filters.js";
import getVisibleExpenses from "./selectors/selector-expenses";
import "./firebase/firebase.js";

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

ReactDOM.render(<h1>Loading...</h1>, document.getElementById('app'));

store.dispatch(startSetExpenses())
    .then(
        ()=>{
            ReactDOM.render(jsx, document.getElementById('app'));
        }
    )
    .catch((e)=>{
        alert(e);
    });




