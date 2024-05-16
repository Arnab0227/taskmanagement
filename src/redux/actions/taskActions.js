import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_TASKS = "SET_TASKS";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(setTasks(response.data));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};
