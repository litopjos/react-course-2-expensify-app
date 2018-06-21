
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {startEditExpense, startRemoveExpense} from "../actions/actions-expenses";

const EditExpensePage = (props)=> {
    return (
        <div>
        <h1> Edit Expense Page for id {props.match.params.id}</h1>
        {alert(props.lito)}
        {alert(props.expense.description)}
        {alert(props.expense.createAt)}

        <ExpenseForm 
            defaultExpense = {props.expense} 
            onSubmit = {(expense)=>{
                console.log(expense.createAt);
                alert('expense edited');
                
                props.dispatch(startEditExpense(props.match.params.id,expense));
                props.history.push('/');
            }}

            />
            <p><button onClick={()=>{
                props.dispatch(startRemoveExpense(props.match.params.id))
                props.history.push('/');
                }}>Remove
                </button> </p>

        </div>


    );

}

const MapStateToProps = (state,props)=>{
    console.log('mapstatetoprops');

    return {
        lito:'pe',
        expense: state.expenses.find((expense)=>{
            console.log(expense);
            console.log(props.match.params.id);
            if (expense.id === props.match.params.id) {
                alert ('match');
                return true;
            }
        })
    }
}

const ConnectedEditExpensePage = connect(MapStateToProps)(EditExpensePage);
export default ConnectedEditExpensePage;
