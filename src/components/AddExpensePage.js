
import React from 'react';
import ExpenseForm from "./ExpenseForm";
import {connect} from 'react-redux';
import {addExpense} from "../actions/actions-expenses";


const OnSubmitFromExpenseForm = (expense)=>{
    alert('props onsubmit call');
    console.log(expense);
}

const AddExpensePage = (props)=> (
    <div>
        <h1> Add Expense Page </h1>
        <ExpenseForm onSubmit = {(expense)=>{
            alert('props onsubmit call');
            console.log(expense);
            props.dispatch(addExpense(expense));
            props.history.push('/');
        }} 
        />
    </div>

);


const ConnectedAddExpensePage = connect()(AddExpensePage);

export default ConnectedAddExpensePage;
