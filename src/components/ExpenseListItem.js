import React from "react";
import {connect} from "react-redux";
import {removeExpense} from "../actions/actions-expenses";
import {Link} from "react-router-dom";

const ExpenseListItem = ({dispatch,id,description,amount,createAt},props)=>(
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description} </h3>
        </Link>
        <p>{amount}-{createAt}</p>


    </div>

);

const MapStateToProps = (state)=>{
    console.log(state);
    return {
        filters: state.expenses
    }
}

const ConnectedExpenseListItem = connect()(ExpenseListItem);

export default ConnectedExpenseListItem;
