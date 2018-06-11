// SET_TEXT_FILTER
export const setTextFilter=(text='')=>{
    console.log(`SET_TEXT_FILTER action generator. ${text}`);
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

export const sortByAmount=()=> {
    console.log('SORT_BY_AMOUNT action generator.');
    return {
        type: 'SORT_BY_AMOUNT',
        filter: {
            sortBy: 'AMOUNT'
        }
    };
}

export const sortByDate=()=> {
    console.log('SORT_BY_DATE action generator.');
    return {
        type: 'SORT_BY_DATE',
        filter: {
            sortBy: 'DATE'
        }
    };
}

export const setStartDate=(startDate=undefined)=>{
    console.log('SET_START_DATE action generator. ${startDate}');
    return {
        type: 'SET_START_DATE',
        filter: {
            startDate: startDate,
        }
    };    

}

export const setEndDate=(endDate=undefined)=>{
    console.log('SET_END_DATE action generator. ${startDate}');
    return {
        type: 'SET_END_DATE',
        filter: {
            endDate: endDate,
        }
    };    

}