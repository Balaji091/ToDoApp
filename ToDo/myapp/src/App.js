import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTaskRead, deleteTask } from './redux/actions';
import Tasks from './components/ToDo';
import './App.css';

function App() {
  const [val, setVal] = useState(""); // State for input value
  const tasks = useSelector((state) => state.tasks); // Access tasks from Redux store
  const dispatch = useDispatch(); // To dispatch actions

  function handleAddTask() {
    if (val.trim()) {
      dispatch(addTask(val)); // Dispatch action to add task
      setVal(""); // Clear the input field
    }
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <Tasks 
            key={index} 
            task={task} 
            index={index}
            toggleRead={() => dispatch(toggleTaskRead(index))}
            deleteTask={() => dispatch(deleteTask(index))} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
