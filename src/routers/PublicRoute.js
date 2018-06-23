import React from "react";
import {connect} from "react-redux";
import {Route,Redirect} from "react-router-dom";

const PublicRoute = (
    {
        isAuthenticated,
        component:Component,
        ...rest
    }
) => (
<Route {...rest} component={
    (props)=> (
        isAuthenticated ? 
        (<Redirect to="/dashboard"/>):
        (
            <div>
                <Component {...props}/>
            </div>
        ) 
    )
}/> 
)



const mapStateToProps=(state)=>{
    return {
        isAuthenticated: !! state.auth.uid
    }
}

const connectPublicRoute = connect(mapStateToProps)(PublicRoute);

export default connectPublicRoute;