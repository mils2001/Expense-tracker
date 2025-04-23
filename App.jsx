import React, { useState } from "react";
import ExpenseForm from "./components/Expenseform";
import ExpenseTable from "./components/Expensetable";
import SearchBar from "./components/Searchbar";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", category: "Food", amount: 51 },
    { id: 2, description: "Uber Ride", category: "Transport", amount: 20 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const handleDeleteExpense = (id) => {
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
