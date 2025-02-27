import React, { useEffect, useState } from "react";
import { Task, TaskComponent } from "./Task";

function App() {
  const [tasks, setTask] = useState<Task[]>([]);
  const [text, setText] = useState<string>("");

  // const handleTaskClick = () => {
  //   const nowTasks = tasks;
  //   const i = nowTasks.indexOf(task);
  //   nowTasks[i].isComplied = true;
  //   console.log(nowTasks);
  //   setTask(nowTasks);
  // };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTask([
            ...tasks,
            {
              isComplied: false,
              text: text,
            },
          ]);
          setText("");
        }}
      >
        Добавить задачу
      </button>

      <ul>
        {tasks.map((task, index) => {
          return (
            <TaskComponent text={task.text} isComplied={task.isComplied} />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
