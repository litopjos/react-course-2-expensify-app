import React from "react";
import {connect} from "react-redux";
import {startLogin} from "../actions/actions-auth";

const LoginPage = (props)=>{
    return (
        <button 
            onClick = {props.startLogin}
        >Login</button>
    )
};

const MapDispatchToProps = (dispatch)=>({
    startLogin: ()=>dispatch(startLogin())
})

const ConnectedLoginPage = connect(undefined,MapDispatchToProps)(LoginPage);

export default ConnectedLoginPage;