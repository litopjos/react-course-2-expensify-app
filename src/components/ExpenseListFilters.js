import React from "react";
import {connect} from "react-redux";
import {DateRangePicker} from "react-dates";
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/actions-filters";
import {moment} from "moment";

const onChangeHandler = (e)=>{
    console.log(e.target.value);
    props.dispatch(setTextFilter(e.target.value));
}



class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onFilterDatesChanged = ({startDate, endDate})=>{
        this.props.dispatch (setStartDate(startDate));
        this.props.dispatch (setEndDate(endDate));
    }

    onFilterDatesFocusChanged= (calendarFocused)=>{
        this.setState(()=>({calendarFocused}))

    }

    render() {
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={(e)=>{
                console.log(e.target.value);
                props.dispatch(setTextFilter(e.target.value));
            }}/>
            {console.log('hello')}
            <select value={this.props.filters.sortBy} onChange={
                (e)=>{
                    switch (e.target.value) {
                        case 'DATE':
                            this.props.dispatch(sortByDate())
                        break;

                        case 'AMOUNT':
                            this.props.dispatch(sortByAmount())
                        break;
                    }
                    console.log('changed sort filter');
                    console.log(this.props.filters);
                }
            }>
                <option value="DATE">Date</option>
                <option value="AMOUNT">Amount</option>
            </select>

            <DateRangePicker 
                startDate = {this.props.filters.startDate}
                endDate = {this.props.filters.endDate}
                onDatesChange = {this.onFilterDatesChanged}
                focusedInput = {this.state.calendarFocused}
                onFocusChange = {this.onFilterDatesFocusChanged}
                numberOfMonths = {1}
                isOutsideRange = {()=>false}
                showClearDates = {true}
            >
            </DateRangePicker>
        </div>   
        );  

    }
}

/*
const ExpenseListFilters = (props)=>(
    <div>
        <input type="text" value={props.filters.text} onChange={(e)=>{
            console.log(e.target.value);
            props.dispatch(setTextFilter(e.target.value));
        }}/>
        {console.log('hello')}
        <select value={props.filters.sortBy} onChange={
            (e)=>{
                switch (e.target.value) {
                    case 'DATE':
                        props.dispatch(sortByDate())
                    break;

                    case 'AMOUNT':
                        props.dispatch(sortByAmount())
                    break;
                }
                console.log('changed sort filter');
                console.log(props.filters);
            }
        }>
            <option value="DATE">Date</option>
            <option value="AMOUNT">Amount</option>
        </select>
    </div>
);
*/

const MapStateToProps = (state) =>{
    return {
        filters: state.filters
    };
} 

const ConnectedExpenseListFilters = connect(MapStateToProps)(ExpenseListFilters);


export default ConnectedExpenseListFilters;