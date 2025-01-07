type TodoCardProps = {
  todo: string;
  index: number;
  handleDelete: (index: number) => void;
  handleEdit: (index: number) => void;
};

export function TodoCard({
  todo,
  index,
  handleDelete,
  handleEdit,
}: TodoCardProps) {
  return (
    <li className="todoItem">
      <p>{todo}</p>
      <div className="actionsContainer">
        <button onClick={() => handleEdit(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button onClick={() => handleDelete(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
