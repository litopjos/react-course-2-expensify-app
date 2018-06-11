import uuid from 'uuid';


// Action Generators

// ADD_EXPENSEn 
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

