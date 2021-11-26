import { React, /*useEffect,*/ useState } from 'react';
//import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { AddTask } from './components/AddTask/AddTask';
import { TaskDetails } from './components/TaskDetails/TaskDetails';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programção',
      completed: true
    },
    {
      id: '2',
      title: 'Clique aqui',
      completed: false
    }
  ]);

/*  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await  axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
        );
        setTasks(data)
    };
    fetchTasks();
  }, [])*/

    const handleTaskClick = (taskId) => {
      const newTaks = tasks.map((task) => {
        if (task.id === taskId) return { ...task, completed: !task.completed }
        return task;
      });

      setTasks(newTaks);
    };

    const handleTaskAddition = (taskTitle) => {
      const newTasks = [
        ...tasks,
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
      },
    ];

    setTasks(newTasks);
  };

    const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId)
      
      setTasks(newTasks);
    };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route 
          path="/" 
          exact 
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )} 
       />
       <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
    </Router>
  );
};

export default App;
