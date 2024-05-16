import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTasks,
  addTask,
  editTask,
  deleteTask,
} from "../redux/actions/taskActions";
import FormComponent from "./FormComponent";
import Task from "./Task";

export default function TaskManager() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks) || [];

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = () => {
    if (isEditing) {
      const updatedTask = {
        ...currentTask,
        title,
        description,
        dueDate,
        status,
      };
      dispatch(editTask(updatedTask));
      setIsEditing(false);
      setCurrentTask(null);
    } else {
      const newTask = { id: Date.now(), title, description, dueDate, status };
      dispatch(addTask(newTask));
    }
    resetForm();
  };

  const handleEditClick = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setDueDate(task.dueDate);
    setIsEditing(true);
    setCurrentTask(task);
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCancel = () => {
    resetForm();
    setIsEditing(false);
    setCurrentTask(null);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("pending");
  };

  return (
    <div>
      <div ref={formRef}>
        <FormComponent
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          status={status}
          setStatus={setStatus}
          dueDate={dueDate}
          setDueDate={setDueDate}
          handleSubmit={handleSubmit}
          buttonText={isEditing ? "Save" : "Add Task"}
          handleCancel={isEditing ? handleCancel : null}
        />
      </div>
      <div>
        {tasks
          .slice()
          .reverse()
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              onEdit={() => handleEditClick(task)}
              onDelete={() => handleDelete(task.id)}
            />
          ))}
      </div>
    </div>
  );
}
