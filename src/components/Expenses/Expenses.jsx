import { useState } from 'react';
// import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const expenses = props.expenses;
  const [year, setYear] = useState('2021');

  const addYearHandler = (y) => {
    setYear(y);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} addYearHandler={addYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* {filteredExpenses.map((e) => (
          <ExpenseItem
            key={e.id}
            date={e.date}
            title={e.title}
            amount={e.amount}
          />
        ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
