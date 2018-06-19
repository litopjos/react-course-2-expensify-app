import uuid from 'uuid';
import database from "../firebase/firebase";


// Action Generators

// ADD_EXPENSE
/*
export const addExpense = ({description='',note='',amount=0,createAt=0}={})=>{
    
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createAt
        }
    };
}
*/

export const addExpense = (expense)=>{
    
    return {
        type: "ADD_EXPENSE",
        expense
    };
}

export const startAddExpense = (expenseData={})=>{
    return (dispatch)=>{

        const {description='',note='',amount=0,createAt=0} = expenseData;

        const expense = {description,note,amount,createAt};

        // Save expense data to firebase database
        database.ref("expenses")
            .push(expense)
            .then(
                (ref)=>{
                    dispatch(addExpense({id: ref.key, ...expense}))
                }
            )

    }
};
    

export const setExpenses = (expenses) => {
    return {
        type: "SET_EXPENSES",
        expenses
    }

};


export const startSetExpenses = ()=> {
    return (dispatch)=>{

        return database.ref('expenses').once('value')
            .then( (snapshot)=>{

                const expenses = [];
                snapshot.forEach(
                    (expense)=>{
                        expenses.push({id:expense.key, ...expense.val()})
                    }
                )
                dispatch(setExpenses(expenses));
            })
    }


}

//REMOVE_EXPENSE
export const removeExpense=(id)=>{
    console.log(`REMOVE action generator ${id}`);    
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}
    
//EDIT_EXPENSE
export const editExpense=(id,updates)=>{
    console.log('EDIT_EXPENSE action generator ${id},${updates}');
    return {
            type: 'EDIT_EXPENSE',
            id,
            updates
    };
}

