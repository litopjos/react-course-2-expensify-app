import {createStore, combineReducers} from "redux";
import uuid from 'uuid';

console.log ('redux-expensify');

// State
const demoState = {
    expenses: [ 
        {
            id: "poijhand",
            description: "January rent",
            note: "This was the final payment for this address",
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    }
};

const defaultExpensesState = [];

const defaultFiltersState = demoState.filters;
defaultFiltersState.text = '';
defaultFiltersState.sortBy = 'date';
defaultFiltersState.startDate = undefined;
defaultFiltersState.endDate = undefined;

// Action Generators
// ADD_EXPENSEn 
const addExpense = ({description='',note='',amount=0,createAt=0}={})=>{

    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createAt
        }
    }
}

//REMOVE_EXPENSE
const removeExpense=({id})=>{
    console.log(`REMOVE action generator ${id}`);    
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

//EDIT_EXPENSE
const editExpense=(id,updates)=>{
    console.log('REMOVE_EXPENSE action generator ${id},${updates}');
    return {
            type: 'EDIT_EXPENSE',
            id,
            updates
    };
}

// SET_TEXT_FILTER
const setTextFilter=(text='')=>{
    console.log('SET_TEXT_FILTER action generator. ${text}');
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

const sortByAmount=()=> {
    console.log('SORT_BY_AMOUNT action generator.');
    return {
        type: 'SORT_BY_AMOUNT',
        filter: {
            sortBy: 'AMOUNT'
        }
    };
}

const sortByDate=()=> {
    console.log('SORT_BY_DATE action generator.');
    return {
        type: 'SORT_BY_DATE',
        filter: {
            sortBy: 'DATE'
        }
    };
}

const setStartDate=(startDate=undefined)=>{
    console.log('SET_START_DATE action generator. ${startDate}');
    return {
        type: 'SET_START_DATE',
        filter: {
            startDate: startDate,
        }
    };    

}

const setEndDate=(endDate=undefined)=>{
    console.log('SET_END_DATE action generator. ${startDate}');
    return {
        type: 'SET_END_DATE',
        filter: {
            endDate: endDate,
        }
    };    

}

// Reducers
const expensesReducer = (state=defaultExpensesState, action)=>{
    switch(action.type) {

        case 'ADD_EXPENSE':
            console.log(`ADD_EXPENSE' Action object`);
            console.log(state);
            console.log(action);
            return [...state,action.expense];
        break;

        case 'REMOVE_EXPENSE':
            console.log ('REMOVE_EXPENSE Action object');
            console.log (action.id.id);

            return state.filter((expense)=>{
                console.log (expense.id);
                console.log(`comparing ${expense.id} and ${action.id}`);
                return (expense.id !== action.id)

            })
        break;

        case 'EDIT_EXPENSE':
            console.log('EDIT_EXPENSE Action object');
            console.log(action);
            const editedState = state.map((expense)=>{
                if (expense.id === action.id) {
                    console.log('match');
                    const newExpense = {...expense,...action.updates};
                    console.log(newExpense);
                    return newExpense;
                } else
                    return expense;
            })
            return editedState;
        break;
    }

    return state;
}

const filtersReducer = (state=defaultFiltersState, action)=>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            console.log('SET_TEXT_FILTER Action object');
            console.log(action);
            return {...state, text:action.text}
        break;

        case 'SORT_BY_AMOUNT':
            console.log('SORT_BY_AMOUNT Action object');
            console.log(action);
            return {...state, ...action.filter};
        break;

        case 'SORT_BY_DATE':
            console.log('SORT_BY_DATE Action object');
            console.log(action);
            return {...state, ...action.filter};
        break;        

        case 'SET_START_DATE':
            console.log('SET_START_DATE Action object');
            console.log(action);
            return {...state, ...action.filter};
        break;    

        case 'SET_END_DATE':
            console.log('SET_END_DATE Action object');
            console.log(action);
            return {...state, ...action.filter};
        break;          

    }
    return state;
}


const store = createStore(
    combineReducers( 
        {
            expenses: expensesReducer,
            filters: filtersReducer
        }
    )
);

const getVisibleExpenses=(expenses,{text,sortBy, startDate, endDate})=>{
    console.log(startDate);

    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createAt;
        const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createAt;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        console.log(`textmatch ${textMatch}`);
        console.log (startDateMatch && endDateMatch && textMatch);
        return startDateMatch && endDateMatch && textMatch;

    }).sort((expenseA, expenseB)=>{
        console.log(sortBy);
        switch (sortBy){
            case 'DATE':
                console.log(expenseA);
                console.log(expenseB);
                const compareRes =expenseA.createAt < expenseB.createAt ? 1 : -1;
                console.log(compareRes);
                return compareRes;
            break;

            case 'AMOUNT':
                return expenseA.amount < expenseB.amount ? 1 : -1;
            break;             
        }
    });
}

store.subscribe(()=>{
    const state = store.getState();
    console.log(state);

    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
})

const expenseIdThree = store.dispatch(addExpense({description:'Food',amount:4000,createAt:3000}));
const expenseIdOne = store.dispatch(addExpense({description:'rent', amount:25}));
const expenseIdTwo = store.dispatch(addExpense({amount:5000,description:'escort fee'}));

console.log(store.getState());

//console.log(expenseIdOne.expense.id);
//store.dispatch(removeExpense({id:expenseIdOne.expense.id}));

console.log(store.getState());

const user = {
    name: 'lito',
    age: '51'
};

console.log({...user,height:5.6});

store.dispatch (editExpense(expenseIdOne.expense.id,{createAt:100}));
store.dispatch (editExpense(expenseIdTwo.expense.id,{createAt:1000}));



store.dispatch(setTextFilter());



store.dispatch(sortByAmount());



store.dispatch(sortByDate());



store.dispatch(sortByAmount());


store.dispatch(setStartDate());


store.dispatch(setStartDate());


store.dispatch(setEndDate());


store.dispatch(setEndDate());

store.dispatch(sortByDate());

store.dispatch(sortByAmount());

