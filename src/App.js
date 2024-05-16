import React from "react";
import TaskManager from "./components/TaskManager";

export default function App() {
  return (
    <div>
      <div className=" flex justify-center items-center bg-black text-white h-12 text-2xl rounded-b-lg shadow-xl">
        Task List
      </div>
      <TaskManager />
    </div>
  );
}
