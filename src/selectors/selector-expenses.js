 
import moment from "moment";

const GetFilteredExpenses = (expenses,{text,sortBy, startDate, endDate})=>{
    console.log(startDate);

    return expenses.filter((expense)=>{
        console.log(expense);

        const createdAtMoment = moment(expense.createAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') :true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'): true;

  //      const startDateMatch = true;
  //      const endDateMatch = true;

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

export default GetFilteredExpenses;