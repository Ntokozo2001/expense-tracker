import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ items }) {
  return (
    <ul>
      {items.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
