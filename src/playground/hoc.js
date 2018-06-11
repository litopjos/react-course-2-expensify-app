import React from "react";
import ReactDOM from "react-dom";

const Info = (props)=>(
    <div>
    <h1> Hello World!</h1>
    <p> This is the props: {props.info}</p>
    </div>
);

const withAdminInfo = (WrappedComponent)=>{
    return (props) => (
        <div>
        {props.isAdmin && <p>Extra info</p>}
        <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent)=>{
    return (props) => (
        <div>
        { props.isAuthenticated ? <WrappedComponent {...props}/>:'please login'}
        </div>
        
    )
}
const Hoc = withAdminInfo(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {false} info='lito'/>, document.getElementById("app"));

console.log('hoc.js');                        