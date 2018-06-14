import React from "react";
import {connect} from "react-redux";
import {removeExpense} from "../actions/actions-expenses";
import {Link} from "react-router-dom";
import moment from "moment";
import numeral from "numeral"

const ExpenseListItem = ({dispatch,id,description,amount,createAt},props)=>(
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description} </h3>
        </Link>
        <p>
            {numeral(amount/100).format('$0,0.00')}
            -
            {moment(createAt).format("MMMM Do, YYYY")};
        </p>
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
