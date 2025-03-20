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
    <div className="flex flex-col items-stretch bg-white">
      <header className="flex flex-row items-stretch items-center basis-2/3">
        <div className="flex flex-col items-start basis-1/2 p-16">
          <h1 className="flex flex-col text-6xl font-bold mb-4">
            <span className="text-left">
              {" "}
              Crearte you <br /> online videos{" "}
            </span>
          </h1>
          <p className="flex flex-col text-left text-gray-600 mb-6 text-4xl">
            <span>Lorem ipsum dolor sit amet,</span>
            <span> consectetur adipiscing elit.</span>
            <span>Cursus imperdiet sed id elementum.</span>
            <span>Quam vel aliquam sit vulputate.</span>
          </p>
          <button className="px-5 py-2 bg-black text-white rounded-full text-4xl">
            Get started
          </button>
        </div>
        <section className="mb-4 basis-1/2 pr-20 mt-10">
          <img src="photo.jpg" />
        </section>
      </header>

      <main className=" max-w-7xl mx-auto mt-12 basis-1/3">
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="p-8 bg-[#F7D3D0] rounded-lg text-start">
            <div className="flex justify-between items-center mb-6">
              <span className="text-7xl font-bold text-[#f2f5f4]">01</span>
              <img className="w-20" src="icon1.png" />
            </div>
            <h2 className="font-semibold mb-2 text-3xl font-bold">Title</h2>
            <p className="mt-3 text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="p-8 bg-[#FBF1A7] rounded-lg text-start">
            <div className="flex justify-between items-center mb-6">
              <span className="text-7xl font-bold text-[#f2f5f4]">02</span>
              <img className="w-20" src="icon2.png" />
            </div>
            <h2 className="font-semibold mb-2 text-3xl font-bold">Title</h2>
            <p className="mt-3 text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="p-8 bg-[#C2DDDD] rounded-lg text-start">
            <div className="flex justify-between items-center mb-6">
              <span className="text-7xl font-bold text-[#f2f5f4]">03</span>
              <img className="w-20" src="icon3.png" />
            </div>
            <h2 className="font-semibold mb-2 text-3xl font-bold">Title</h2>
            <p className="mt-3 text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="p-8 bg-[#A09CFD] rounded-lg text-start">
            <div className="flex justify-between items-center mb-6">
              <span className="text-7xl font-bold text-[#f2f5f4]">04</span>
              <img className="w-20" src="icon4.png" />
            </div>
            <h2 className="font-semibold mb-2 text-3xl font-bold">Title</h2>
            <p className="mt-3 text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
