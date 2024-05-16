import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions/taskActions";

export default function Task({ task, onEdit }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 pb-6 px-10 pt-5 md:pt-8 justify-center items-center">
      <div className="lg:col-span-2 capitalize text-justify flex lg:justify-evenly  items-center">
        {task.title}
      </div>
      <div className="lg:col-span-2 capitalize text-justify flex lg:justify-evenly items-center">
        {task.description}
      </div>
      <div className="col-span-1 flex capitalize justify-center items-center text-gray-500">
        {task.status}
      </div>
      <div className="col-span-1 flex justify-center items-center text-gray-500">
        {task.dueDate}
      </div>
      <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
        <button
          className="bg-black text-white px-2 py-1 w-24 h-8 cursor-pointer rounded-lg shadow-xl hover:animate-pulse "
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
      </div>
      <div className="flex justify-center items-center col-span-1 md:col-span-2 lg:col-span-1">
        <button
          className="bg-black text-white px-2 py-1 w-24 h-8 cursor-pointer rounded-lg shadow-xl hover:animate-pulse  "
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
