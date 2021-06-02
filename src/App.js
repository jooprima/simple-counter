import { useState } from "react";

import plusIcon from "./assets/plus-icon.svg";
import minusIcon from "./assets/minus-icon.svg";

import "./App.css";
import Navbar from "./components/Navbar/index";
import Container from "./components/Container";

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

    if (!value) {
      alert("No blank list!");
      return;
    }

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];

    setTodos(addedTodos);
    setValue("");
  };

  //fungsi menambahkan counter
  const handleAdditionCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  };

  //method todos dari state reduce
  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);
    return totalCounts;
  };

  //fungsi mengurangi counter
  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 0) {
      // selama jumlah count masih diatas 0
      // bisa lakukan pengurangan
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      // kalo udah 0 dan masih dikurangin juga
      // hapus array value dengan index yg sesuaui
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />

      <Container>
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

        <div className="info">
          <div className="info-total">
            <p>{`Total List: ${todos.length}`}</p>
          </div>

          <div className="info-total">
            <p>{`Total Counts: ${getTotalCounts()}`}</p>
          </div>

          <button onClick={() => setTodos([])} className="delete-all-button">
            Delete All List
          </button>
        </div>

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
      </Container>
    </>
  );
}

export default App;
