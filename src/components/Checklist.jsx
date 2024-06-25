import React, { useState } from "react";
import "./Checklist.css";

function Checklist() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [route, setRoute] = useState([]);
  const [newRoute, setNewRoute] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { text: newItem, checked: false }]);
      setNewItem("");
    }
  };

  const addRoute = () => {
    if (newRoute.trim() !== "") {
      setRoute([...route, newRoute]);
      setNewRoute("");
    }
  };

  const toggleCheck = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const deleteRoute = (index) => {
    const newRoute = route.filter((_, i) => i !== index);
    setRoute(newRoute);
  };

  return (
    <div className="App">
      <h1>Traveler's Checklist</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleCheck(index)}
            />
            <span className={item.checked ? "checked" : ""}>{item.text}</span>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Travel Route</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add new route"
          value={newRoute}
          onChange={(e) => setNewRoute(e.target.value)}
        />
        <button onClick={addRoute}>Add Route</button>
      </div>
      <ol>
        {route.map((routeItem, index) => (
          <li key={index}>
            {routeItem}
            <button onClick={() => deleteRoute(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Checklist;
