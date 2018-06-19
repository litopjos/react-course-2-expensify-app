import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import expensesReducer from "../reducers/reducers-expenses.js";
import filtersReducer from "../reducers/reducers-filters.js";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;


export default ()=>{
    console.log('creating redux store...');

    return createStore(
        combineReducers( 
            {
                expenses: expensesReducer,
                filters: filtersReducer
            }
        ),
        composeEnhancers(applyMiddleware(thunk))

 // TRY TO REMEMBER WHAT REDUX DEVTOOLS WAS USED FOR       
 //       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

}

