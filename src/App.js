import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date('2021/5/29'),
  },
  {
    id: 'e2',
    title: 'Food',
    amount: 50.87,
    date: new Date('2021/5/18'),
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 899.55,
    date: new Date('2020/3/15'),
  },
  {
    id: 'e4',
    title: 'Movies',
    amount: 33.45,
    date: new Date('2021/9/9'),
  },
];

function App() {
  const [expenses, setExoenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    setExoenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenase={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
