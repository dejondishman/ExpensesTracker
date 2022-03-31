import React, {useState} from "react";
import "./ExpenseForm.css"

//the goal is to return a form for our inputs, our inputs for new expenses 
//so now that is done the next step is to react to every change in each of the inputs (every key stroke)
const ExpenseForm = () => {
    const [enteredTitle, setEntderedTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState(' ')
    const [enteredDate, setEnteredDate] = useState('') 
    const titleChangeHandler = (event) => {  
        setEntderedTitle(event.target.value); //this saves the value of the new title that was entered
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
    }
    //submitHandler function saves all of the data recieved from the entered inputsb

    return(
        <div className="new-expense">
            <form onSubmit={submitHandler}>
               <div className="new-expense__controls">
                   <div className="new-expense__control">
                       <label>Title</label>
                       <input 
                       type='text'
                        value={enteredTitle} 
                        onChange={titleChangeHandler}/>
                   </div>
                   <div className="new-expense__control">
                       <label>Amount</label>
                       <input 
                       type='number' min="0.01" step="0.01" 
                       value={enteredAmount} 
                       onChange={amountChangeHandler}/>
                   </div>
                   <div className="new-expense__control">
                       <label>Date</label>
                       <input
                        type='date' min="2019-01-01" max="2022-12-31" 
                        value={enteredDate} 
                        onChange={dateChangeHandler}/>
                   </div>
                   <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                   </div>
               </div> 
            </form>
        </div>
    )
};

export default ExpenseForm