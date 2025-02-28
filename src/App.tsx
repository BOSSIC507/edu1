import React, { useEffect, useState } from "react";
import { Task, TaskComponent } from "./Task";
import "./styles/index.css";

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
      <nav className="navBar">
        <div>
          <img src="" alt="" className="logo" />
        </div>
        <div className="links">
          <span>Новости</span>
          <span>Мероприятия</span>
          <span>Студенту</span>
          <span>ОПК</span>
          <span>Центр</span>
        </div>
        <div>
          <button className="lk text-7xl">Личный кабинет</button>
        </div>
      </nav>
      {/* <input
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

      <ul className="tasks">
        {tasks.map((task, index) => {
          return (
            <TaskComponent text={task.text} isComplied={task.isComplied} />
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;
