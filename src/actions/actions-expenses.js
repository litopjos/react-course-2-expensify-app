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
    return (dispatch,getState)=>{

        const uid = getState().auth.uid;

        const {description='',note='',amount=0,createAt=0} = expenseData;

        const expense = {description,note,amount,createAt};

        // Save expense data to firebase database
        database.ref(`users/${uid}/expenses`)
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
    return (dispatch,getState)=>{

        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/expenses`).once('value')
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
    
export const startRemoveExpense=(id)=>{
    return (dispatch,getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
            .remove()
            .then(()=>{
                alert('database remove succeeded');
                dispatch(removeExpense(id));
            })
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

export const startEditExpense=(id,updates)=>{

    return (dispatch,getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
            .update(
                {
                    description: updates.description ? updates.description : "",
                    note: updates.note ? updates.note : undefined,
                    amount: updates.amount ? updates.amount : 0,
                    createAt: updates.createAt ? updates.createAt : 0
                }
            )
            .then( (ref)=>{
                dispatch(editExpense(id,updates));
            })
    }
}

