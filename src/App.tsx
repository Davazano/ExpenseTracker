import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

export const categories = ["Groceries", "Utilities", "Electronics"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [items, SetItems] = useState([
    { id: 1, description: "Orange", amount: 5, category: "Groceries" },
    { id: 2, description: "Apple", amount: 7, category: "Groceries" },
    { id: 3, description: "Phone", amount: 900, category: "Electronics" },
  ]);

  const handleDeleteItem = (id: number) => {
    console.log("Deleting", id);
    SetItems(items.filter((item) => item.id !== id));
  };

  const visibleItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList items={visibleItems} onDelete={handleDeleteItem} />
    </div>
  );
}

export default App;
