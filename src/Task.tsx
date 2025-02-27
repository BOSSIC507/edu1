import { useState } from "react";
import "./styles/index.css";

export interface Task {
  text: string;
  isComplied: boolean;
}

export const TaskComponent = (task: Task) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  return (
    <li
      onClick={() => {
        setChecked(!isChecked);
      }}
      className="block"
    >
      {task.text}
      {isChecked ? "+" : "-"}
    </li>
  );
};
