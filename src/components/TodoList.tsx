import { TodoCard } from "./TodoCard";

type TodoListProps = {
  todos: string[];
  handleDelete: (index: number) => void;
  handleEdit: (index: number) => void;
};

export default function TodoList(props: TodoListProps) {
  return (
    <div>
      <ul className="main">
        {props.todos.map((todo, index) => (
          <TodoCard key={index} todo={todo} index={index} {...props}></TodoCard>
        ))}
      </ul>
    </div>
  );
}
