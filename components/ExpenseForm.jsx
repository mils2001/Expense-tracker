import React, { useState } from 'react';


const ExpenseForm = ({ onAdd }) => {

  const [description, setDescription] = useState('');

  const [amount, setAmount] = useState('');

  const [category, setCategory] = useState('');


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!description || !amount || !category) return; // Add validation if needed

    const newExpense = { description, amount: parseFloat(amount), category };

    onAdd(newExpense); // Pass the new expense to the parent component

    setDescription(''); // Clear input

    setAmount(''); // Clear input

    setCategory(''); // Clear input

  };


  return (

    <form onSubmit={handleSubmit}>

      <input

        type="text"

        placeholder="Description"

        value={description}

        onChange={(e) => setDescription(e.target.value)}

      />

      <input

        type="number"

        placeholder="Amount"

        value={amount}

        onChange={(e) => setAmount(e.target.value)}

      />

      <input

        type="text"

        placeholder="Category"

        value={category}

        onChange={(e) => setCategory(e.target.value)}

      />

      <button type="submit">Add Expense</button>

    </form>

  );

};


export default ExpenseForm;
