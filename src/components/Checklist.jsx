import React, { useState, useEffect } from "react";
import "./Checklist.css";

function Checklist() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [newItem, setNewItem] = useState("");
  const [route, setRoute] = useState(() => {
    const savedRoute = localStorage.getItem("route");
    return savedRoute ? JSON.parse(savedRoute) : [];
  });
  const [newRoute, setNewRoute] = useState("");
  const [editingItemIndex, setEditingItemIndex] = useState(null);
  const [editingRouteIndex, setEditingRouteIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("route", JSON.stringify(route));
  }, [route]);

  const addItem = () => {
    if (newItem.trim() !== "") {
      if (editingItemIndex !== null) {
        const updatedItems = items.map((item, index) =>
          index === editingItemIndex ? { ...item, text: newItem } : item
        );
        setItems(updatedItems);
        setEditingItemIndex(null);
      } else {
        setItems([...items, { text: newItem, checked: false }]);
      }
      setNewItem("");
    }
  };

  const addRoute = () => {
    if (newRoute.trim() !== "") {
      if (editingRouteIndex !== null) {
        const updatedRoute = route.map((routeItem, index) =>
          index === editingRouteIndex ? newRoute : routeItem
        );
        setRoute(updatedRoute);
        setEditingRouteIndex(null);
      } else {
        setRoute([...route, newRoute]);
      }
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

  const editItem = (index) => {
    setNewItem(items[index].text);
    setEditingItemIndex(index);
  };

  const editRoute = (index) => {
    setNewRoute(route[index]);
    setEditingRouteIndex(index);
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
        <button onClick={addItem}>
          {editingItemIndex !== null ? "Update Item" : "Add Item"}
        </button>
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
            <button onClick={() => editItem(index)}>Edit</button>
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
        <button onClick={addRoute}>
          {editingRouteIndex !== null ? "Update Route" : "Add Route"}
        </button>
      </div>
      <ol>
        {route.map((routeItem, index) => (
          <li key={index}>
            {routeItem}
            <button onClick={() => editRoute(index)}>Edit</button>
            <button onClick={() => deleteRoute(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Checklist;
