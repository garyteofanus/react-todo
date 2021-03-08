import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Title from './components/Title';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Search from './components/Search';
import Sort from './components/Sort';

const SORT_MAP = {
  title: (a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
  date: (a, b) => a.date > b.date ? 1 : -1
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortOption, setSortOption] = useState("title");
  const [searchTerm, setSearchTerm] = useState("");

  const addTaskHandler = (taskToBeAdded) => {
    setTasks([...tasks, taskToBeAdded]);
  };

  const removeTaskHandler = (taskToBeDeletedID) => {
    setTasks(tasks.filter(task => taskToBeDeletedID !== task.id));
  };

  const getData = () => {
    const sorted = tasks.slice().sort(SORT_MAP[sortOption]);
    if (searchTerm !== "") {
      const newTasks = sorted.filter(each => {
        const lowercase = each.title.toLowerCase();
        return lowercase.includes(searchTerm.toLowerCase());
      });
      return newTasks;
    } else {
      return sorted;
    }
  };

  // Get task from localStorage for saved task
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      setTasks(tasks);
    }
  }, [])

  // Update tasks in localStorage if new task is added
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header className="Header"/>
      
      <div>
        <Title text="New Task" />
        <TaskForm addTaskHandler={addTaskHandler} />

        <hr></hr>

        <Title text="Task List" />
        <div className="SortSearch">
          <Search filterTaskHandler={setSearchTerm} />
          <Sort sortTaskHandler={setSortOption}/>
        </div>
        <TaskList data={getData()} removeTaskHandler={removeTaskHandler} />
      </div>
    </div>
  );
}

export default App;
