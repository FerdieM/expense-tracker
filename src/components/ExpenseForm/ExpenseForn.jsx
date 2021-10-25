import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [displayForm, setdisplayForm] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // const date = new Date(enteredDate.replace(/-/g, '/'));
    // console.log(date);

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate.replace(/-/g, '/')),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const addDisplayHandler = () => {
    console.log('Add Form Handler.');
    setdisplayForm((prevState) => !prevState);
  };

  if (displayForm) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__display">
          <div className="new-expense__actions">
            <button type="button" onClick={addDisplayHandler}>
              Cancel
            </button>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    );
  }

  if (!displayForm) {
    return (
      <div className="new-expense__controls">
        <div className="new-expense__display">
          <button onClick={addDisplayHandler}>Add New Expense</button>
        </div>
      </div>
    );
  }

  // let content_text = displayForm ? (
  //   <form onSubmit={submitHandler}>
  //     <div className="new-expense__controls">
  //       <div className="new-expense__control">
  //         <label>Title</label>
  //         <input type="text" onChange={titleChangeHandler} />
  //       </div>
  //       <div className="new-expense__control">
  //         <label>Amount</label>
  //         <input
  //           type="number"
  //           min="0.01"
  //           step="0.01"
  //           onChange={amountChangeHandler}
  //         />
  //       </div>
  //       <div className="new-expense__control">
  //         <label>Date</label>
  //         <input
  //           type="date"
  //           min="2019-01-01"
  //           max="2022-12-31"
  //           onChange={dateChangeHandler}
  //         />
  //       </div>
  //     </div>
  //     <div className="new-expense__display">
  //       <div className="new-expense__actions">
  //         <button type="button" onClick={addDisplayHandler}>
  //           Cancel
  //         </button>
  //       </div>
  //       <div className="new-expense__actions">
  //         <button type="submit">Add Expense</button>
  //       </div>
  //     </div>
  //   </form>
  // ) : (
  //   <div className="new-expense__controls">
  //     <div className="new-expense__display">
  //       <button onClick={addDisplayHandler}>Add New Expense</button>
  //     </div>
  //   </div>
  // );

  // return <div>{content_text}</div>;
};

export default ExpenseForm;
