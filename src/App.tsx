import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  function handleAdd(todo: string) {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    persistTodos(updatedTodos);
  }

  function handleDelete(index: number) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    persistTodos(updatedTodos);
  }

  function handleEdit(index: number) {
    const todoForUpdate = todos[index];
    setTodo(todoForUpdate);
    handleDelete(index);
  }

  function persistTodos(todos: string[]) {
    if (!localStorage) {
      return;
    }

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    const storedTodos = localStorage.getItem("todos");
    if (!storedTodos) {
      return;
    }
    const todos: string[] = JSON.parse(storedTodos);
    setTodos(todos);
  }, []);

  return (
    <>
      <TodoInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
