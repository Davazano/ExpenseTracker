import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [items, SetItems] = useState([
    { id: 1, description: "Orange", amount: 5, category: "Groceries" },
    { id: 2, description: "Apple", amount: 7, category: "Groceries" },
    { id: 3, description: "Phone", amount: 900, category: "Electronic" },
  ]);

  const handleDeleteItem = (id: number) => {
    console.log("Deleting", id);
    SetItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ExpenseList items={items} onDelete={handleDeleteItem} />
    </div>
  );
}

export default App;
