import { useState } from "react";

function TodoItem({ todo, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li className={isCompleted ? "completed" : ""}>
  <input
    type="checkbox"
    checked={isCompleted}
    onChange={() => setIsCompleted(!isCompleted)}
  />
  <span>{todo.text}</span> {}
  <button onClick={() => onDelete(todo.id)}>❌</button>
</li>

  );
}

export default TodoItem;
