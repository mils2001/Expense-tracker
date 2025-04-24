import React, { useState, useEffect } from "react";

import ExpenseForm from "./components/Expenseform";

import ExpenseTable from "./components/Expensetable";

import SearchBar from "./components/Searchbar";

import './App.css'; // Importing the CSS file for styling


const App = () => {

  const [expenses, setExpenses] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");


  // Fetch data from the json-server

  useEffect(() => {

    const fetchData = async () => {

      const response = await fetch("http://localhost:3000/expenses");

      const data = await response.json();

      setExpenses(data);

    };


    fetchData();

  }, []);


  const handleAddExpense = async (expense) => {

    const response = await fetch("http://localhost:3000/expenses", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({ ...expense, id: Date.now() }),

    });

    const newExpense = await response.json();

    setExpenses([...expenses, newExpense]);

  };


  const handleDeleteExpense = async (id) => {

    await fetch(`http://localhost:3000/expenses/${id}`, {

      method: "DELETE",

    });

    setExpenses(expenses.filter((exp) => exp.id !== id));

  };


  const filteredExpenses = expenses.filter(

    (exp) =>

      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||

      exp.category.toLowerCase().includes(searchTerm.toLowerCase())

  );


  return (

    <div className="container">

      <h1>💸 Expense Tracker</h1>

      <SearchBar onSearch={setSearchTerm} />

      <ExpenseForm onAdd={handleAddExpense} />

      <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />

    </div>

  );

};


export default App;
