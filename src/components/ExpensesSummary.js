
import React from 'react';
import {connect} from "react-redux";
import GetFilteredExpenses from "../selectors/selector-expenses";
import GetTotalAmount from "../selectors/selector-expenses-total";


const ExpensesSummary = ({ExpensesCount, ExpenseTotal}) => {
    return (
        <div>
            <h1> Expenses Summary </h1>
            <p> {`Number of Filtered Expenses: ${ExpensesCount}`}</p>
            <p> {`Total: ${ExpenseTotal}`}</p>
        </div>
    );
}

const MapStateToProp = (state)=>{
    const expenses = state.expenses;
    const filters = state.filters;

    console.log(state);
    console.log(expenses);

    const FilteredExpenses = GetFilteredExpenses(expenses,filters);

    const TotalAmount = GetTotalAmount(expenses);

    return {
        ExpensesCount: expenses.length,
        ExpenseTotal: TotalAmount
    }


}

const ExportedExpensesSummary = connect(MapStateToProp)(ExpensesSummary);

export default ExportedExpensesSummary;