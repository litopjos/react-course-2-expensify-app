// Reducers
const defaultExpensesState = [];
export default (state=defaultExpensesState, action)=>{
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

                    const newExpense = {...expense,...action.updates};
                    console.log(newExpense);
                    alert('match edit');
                    return newExpense;
                } else
                    return expense;
            })
            return editedState;
        break;

        case 'SET_EXPENSES':
            console.log(action.expenses);
            alert('SET_EXPENSES');
            return action.expenses; 
        break;
    }

    return state;
}