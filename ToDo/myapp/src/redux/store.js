import { createStore } from 'redux';

// Initial state
const initialState = {
  tasks: [] // Array to store tasks
};

// Reducer function
function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case 'TOGGLE_TASK_READ':
      return {
        ...state,
        tasks: state.tasks.map((task, index) => 
          index === action.payload ? { ...task, isRead: !task.isRead } : task
        )
      };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload)
      };

    default:
      return state;
  }
}

// Create the store
const store = createStore(taskReducer);

export default store;
