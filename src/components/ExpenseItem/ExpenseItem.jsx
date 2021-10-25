import React, { useState } from 'react';

import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [expenseTitle, setexpenseTitle] = useState(props.title);
  const expenseAmount = props.amount;

  const clickHandler = () => {
    setexpenseTitle('Updated');
    console.log(expenseTitle);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
