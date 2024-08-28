import React from 'react';

function ExpenseItem({ title, amount, date }) {
  return (
    <li>
      <div>{title}</div>
      <div>{amount.toFixed(2)}</div>
      <div>{date.toLocaleDateString()}</div>
    </li>
  );
}

export default ExpenseItem;
