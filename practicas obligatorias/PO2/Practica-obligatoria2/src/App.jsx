import React from 'react';
import Table from './components/Tables'; // Ajusta la ruta si es necesario

const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

const App = () => {
  return (
    <div>
      <h1>Net Incomes Table</h1>
      <Table netIncomes={netIncomes} />
    </div>
  );
};

export default App;
