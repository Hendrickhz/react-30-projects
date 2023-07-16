import React, { useState } from "react";
import Title from "../../components/Title";
import { TableStyle } from "./TableStyle";
import Task from "./Task";
import NewTask from "./NewTask";
const TasksTrackerApp = () => {
  const [newTask, setNewTask] = useState({
    date: "",
    text: "",
    completed: false,
  });
  const handleChangeDate = (e) => {
    setNewTask({ ...newTask, date: e.target.value });
  };
  const handleChangeText = (e) => {
    setNewTask({ ...newTask, text: e.target.value });
  };
  let tasks = [{ date: "", text: "" }];
  const [taskList, setTaskList] = useState(tasks);
  const addNewTask = () => {
    setTaskList([...taskList, { date: newTask.date, text: newTask.text }]);
  };
  const handleOnTaskClick = (e) => {
    e.target.classList.toggle("completed");
  };
  const handleDelete = (e) => {
    window.confirm("Are you sure to delete?") &&
      e.target.parentElement.remove();
  };
  return (
    <div>
      <Title text={"Task Tracker"} />
      <TableStyle>
        <ul className="table-head">
          <li>Date</li>
          <li>Task</li>
        </ul>
        <Task
          date={newTask.date}
          setDate={handleChangeDate}
          text={newTask.text}
          setText={handleChangeText}
          onClick={addNewTask}
        />
        <ul className="table-row">
          {taskList.map((task, index) =>
            task.date != "" && task.text != "" ? (
              <NewTask
                key={index}
                date={task.date}
                taskClick={handleOnTaskClick}
                text={task.text}
                onDelete={handleDelete}
              />
            ) : null
          )}
        </ul>
      </TableStyle>
    </div>
  );
};

export default TasksTrackerApp;
