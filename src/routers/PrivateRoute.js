import React from "react";
import {connect} from "react-redux";
import {Route,Redirect} from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";

        // These are the parameters destructured from params.
        // Note: components has been renamed to Components and rest contains all the other
        // properties except for isAuthenticated and components.
const PrivateRoute = (
            {
                isAuthenticated,
                component:Component,
                ...rest
            }
    ) => (
        <Route {...rest} component={
            (props)=> (
                isAuthenticated ? 
                (
                    <div>
                        <Header/>
                        <Component {...props}/>
                    </div>
                ) :
                (<Redirect to="/"/>)
            )
        }/> 
    )


const MapStateToProps = (state)=>{
    return {
        isAuthenticated: !!state.auth.uid
    }
}
const connectedPrivateRoute = connect(MapStateToProps)(PrivateRoute);

export default connectedPrivateRoute;
