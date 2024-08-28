import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate),
    };

    onAddExpense(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={(e) => setEnteredTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={enteredAmount}
          onChange={(e) => setEnteredAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={enteredDate}
          onChange={(e) => setEnteredDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
