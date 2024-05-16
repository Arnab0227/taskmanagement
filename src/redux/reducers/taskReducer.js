import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SET_TASKS,
} from "../actions/taskActions";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  console.log("Action dispatched:", action.type);
  switch (action.type) {
    case SET_TASKS:
      console.log("Tasks set:", action.payload);
      return { ...state, tasks: action.payload };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
