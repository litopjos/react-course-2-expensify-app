import React from "react";

import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/selector-expenses"

const RenderExpense = (expense)=>(
    <div>
        <ExpenseListItem key={expense.id} {...expense} />
    </div>
)

const ExpenseList = (props)=> (
    <div>
        <h1> Expense List </h1>
        {props.expenses.map(RenderExpense)}

    </div>

);

const mapStateToProps = (state)=>{
    return {
        expenses:selectedExpenses(state.expenses,state.filters)

    }
};

export default connect(mapStateToProps)(ExpenseList);

