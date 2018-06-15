const getExpensesTotal = (expenses)=>{
    
    var total = 0;

    expenses.map((expense)=>{
        total += expense.amount
    });

    return total;

 //   return expenses.reduce((sum,expense)=>{
 //       return sum += expense.amount;
 //   })
}

export default getExpensesTotal;