import { useState } from "react";
import classnames from "classnames";

import shoppingIcon from "./assets/shopping-icon.svg";
import plusIcon from "./assets/plus-icon.svg";
import minusIcon from "./assets/minus-icon.svg";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu", count: 1 },
    { title: "kopi", count: 1 },
    { title: "gula", count: 1 },
  ]);

  //fungsi
  const handleSubmit = (e) => {
    e.preventDefault();

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];

    setTodos(addedTodos);
  };

  console.log(value);
  console.log(todos);

  //fungsi menambahkan counter
  const handleAdditionCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  };

  //fungsi mengurangi counter
  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count - 1;

    setTodos(newTodos);
  };

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>

      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
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
            {todos.map((todo, index, arr) => {
              return (
                <div
                  key={index}
                  className={`todo ${
                    !(arr.length === index + 1) && "todo-divider"
                  }`}
                >
                  {todo.title}
                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>
                    <button
                      onClick={() => handleSubstractionCount(index)}
                      className="todo-action-button"
                    >
                      <img src={minusIcon} alt="minus icon" />
                    </button>
                    <button
                      onClick={() => handleAdditionCount(index)}
                      className="todo-action-button"
                    >
                      <img src={plusIcon} alt="plus icon" />
                    </button>
                  </div>
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
