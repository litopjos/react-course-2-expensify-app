import {createStore,combineReducers} from "redux";
import expensesReducer from "../reducers/reducers-expenses.js";
import filtersReducer from "../reducers/reducers-filters.js";


export default ()=>{
    console.log('creating redux store...');

    return createStore(
        combineReducers( 
            {
                expenses: expensesReducer,
                filters: filtersReducer
            }
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

}

