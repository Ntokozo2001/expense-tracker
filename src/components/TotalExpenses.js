import React from 'react';

function TotalExpenses({ items }) {
  const total = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div>
      <h2>Total Expenses: R{total.toFixed(2)}</h2>
    </div>
  );
}

export default TotalExpenses;
