import { useState } from "react";

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
    >
      {task.text}
      {isChecked ? "+" : "-"}
    </li>
  );
};
