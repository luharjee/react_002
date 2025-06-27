import React, { useState } from "react";

const To_Do_List = () => {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Hit Gym",
    "Take Shower",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1>To - Do - List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Add a Task..."
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <br />
      <br />
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => removeTask(index)}>Delete</button>
            <button onClick={() => moveTaskUp(index)}>MoveUp</button>
            <button onClick={() => moveTaskDown(index)}>MoveDown</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default To_Do_List;
