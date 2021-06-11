import { useState } from "react";

import Navbar from "./components/Navbar/index";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";

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
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}
        />

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubstractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
