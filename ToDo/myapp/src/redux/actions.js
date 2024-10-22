// Action to add a new task
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: { text: task, isRead: false } // Task has 'text' and 'isRead' properties
});

// Action to toggle task read status
export const toggleTaskRead = (index) => ({
  type: 'TOGGLE_TASK_READ',
  payload: index // Pass the index of the task to toggle read state
});

// Action to delete a task
export const deleteTask = (index) => ({
  type: 'DELETE_TASK',
  payload: index // Pass the index of the task to delete
});
