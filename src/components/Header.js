
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from "../actions/actions-auth";

const Header = (props) => (
    <header>
        <h1>Expensify </h1>
        <NavLink activeClassName="is-active" to="/" exact = {true}>Home</NavLink>
        <NavLink activeClassName="is-active" to="/create">Add New Expense</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
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
