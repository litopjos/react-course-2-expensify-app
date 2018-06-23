
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from "../actions/actions-auth";

const Header = (props) => (
    <header>
        <h1>Expensify </h1>
        <NavLink activeClassName="is-active" to="/dashboard" exact = {true}>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>

        <button
            onClick = {props.Logout}
        >Logout </button>
    </header>
);

const MapDispatchToProps = (dispatch)=>{
    return {
        Logout: startLogout()
    }
}

const connectedHeader = connect(undefined,MapDispatchToProps)(Header);

export default connectedHeader;
