import { useState } from "react";

import shoppingIcon from "./assets/shopping-icon.svg";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu", count: 1 },
    { title: "kopi", count: 1 },
    { title: "gula", count: 1 },
  ]);

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>

      <section className="container">
        <form className="form">
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            className="input"
            type="text"
            placeholder="list"
          />
          <button className="add-button" type="submit">
            add
          </button>
        </form>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo) => {
              return (
                <div>
                  {todo.title}
                  {todo.count}
                </div>
              );
            })}
          </div>
        ) : (
          <div>Kosong</div>
        )}
      </section>
    </>
  );
}

export default App;
