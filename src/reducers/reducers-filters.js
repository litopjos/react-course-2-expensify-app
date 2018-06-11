
import moment from "moment";

const defaultFiltersState = {
    text : '',
    sortBy: 'DATE',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state=defaultFiltersState, action)=>{
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