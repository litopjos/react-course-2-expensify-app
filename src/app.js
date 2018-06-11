import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import Routes from "./routers/AppRouter.js";
import {addExpense} from "./actions/actions-expenses.js";
import {setTextFilter} from "./actions/actions-filters.js";
import getVisibleExpenses from "./selectors/selector-expenses";

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




store.dispatch(addExpense({description:"water bill", amount:4500, createAt:275}));
store.dispatch(addExpense({description:"gas bill", amount:225, createAt:1000}));
store.dispatch(addExpense({description:"rent", amount:10950, createAt:50}));

//store.dispatch(setTextFilter("bill"));

const jsx = (
    <Provider store = {store} >
       <Routes/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

//setTimeout(()=>{
//    store.dispatch(setTextFilter("water"));
//},3000)

