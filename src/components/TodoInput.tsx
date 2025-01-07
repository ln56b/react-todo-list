type TodoInputProps = {
  todo: string;
  setTodo: (todo: string) => void;
  handleAdd: (todo: string) => void;
};

export default function TodoInput({
  todo,
  setTodo,
  handleAdd,
}: TodoInputProps) {
  return (
    <header>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter todo"
      />
      <button
        onClick={() => {
          handleAdd(todo);
          setTodo("");
        }}
      >
        Add
      </button>
    </header>
  );
}
