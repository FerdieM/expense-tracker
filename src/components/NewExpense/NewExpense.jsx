import React from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForn';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpemseData) => {
    const expenseData = { ...enteredExpemseData, id: Math.random().toString() };
    console.log('In NewExpense..');
    props.onAddExpenase(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
