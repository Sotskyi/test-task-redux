// don't forget to import useEffect from react
import { useEffect, useState } from "react";

import { CheckBox } from "../UI/components/CheckBox";

export const MyFavoriteList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleUpdateTodo = (el) => {
    el.complete = true;
    const updatedItem = todos.map((todo) => {
      return todo.id === el.id ? el : todo;
    });

    setTodos(updatedItem);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,

          text: todo.trim(),
          complete: false,
        },
      ]);
    }

    setTodo("");
  };

  const handleDeleteClick = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(removeItem);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <input
          style={{ height: "70px", width: "275px" }}
          name="todo"
          type="text"
          placeholder="Add new episode to watch list and press enter"
          value={todo}
          onChange={handleInputChange}
        />
      </form>
      <div style={{ marginTop: "100px" }}>
        {console.log(todos)}
        {todos.map((el) => (
          <div style={{ display: "flex" }}>
            <CheckBox
              el={el}
              isComplete={el.complete}
              handleUpdateTodo={handleUpdateTodo}
            />
            <div key={el.id}>
              {el.text}
              <button onClick={() => handleDeleteClick(el.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
