import React from "react";
import moment from "moment";
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'


const now = moment();
//alert(now.format('MMM Do, YYYY'));



export default class ExpenseForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            description: props.defaultExpense ? props.defaultExpense.description : "",
            note: props.defaultExpense ? props.defaultExpense.note : "",
            amount: props.defaultExpense ? (props.defaultExpense.amount/100).toString() : "12",
            createAt: props.defaultExpense ? moment(props.defaultExpense.createAt) : moment(),
            calendarFocused: false,
            error: ""
        };
    }


    onDescriptionChange = (e)=>{
        const description = e.target.value;

        this.setState(()=>({description}));
    }

    onNoteChange = (e)=>{
        const note = e.target.value;

        this.setState(()=>({note}));
    }    

    onAmountChange = (e)=>{
        const amount = e.target.value;
        console.log(amount);
        if (!amount || amount.match(/^\d*(\.\d{0,2})?$/))
            this.setState(()=>({amount}));
    }    

    onDateChange = (createAt)=>{
        this.setState(()=>({createAt}));
    }

    onCalendarFocusChange = ({focused})=>{

        this.setState(()=>({calendarFocused:focused}));       
    }

    onSubmit = (e)=>{
        alert('submit');
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            alert('error');
            this.setState(()=>({error:"Incomplete data"}));
        }
        else {
            if (this.state.error)
                this.setState(()=>({error:""}));
            
            this.props.onSubmit( {
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount,10) * 1000,
                createAt: this.state.createAt.valueOf()
                });
  
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type = "text"
                        placeholder = "description"
                        autoFocus 
                        value = {this.state.description}
                        onChange = {this.onDescriptionChange}/>
                    <input
                        type = "number"
                        placeholder = "amount"
                        value = {this.state.amount}
                        onChange = {this.onAmountChange}/>
                    <textarea
                        placeholder = "expense notes" 
                        value={this.state.note}
                        onChange = {this.onNoteChange}/>

                    <SingleDatePicker 
                        date= {this.state.createAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        />

                    <button>Submit Expense</button>

                </form>
            </div>
        );
    }

}

