import  { useState, useEffect } from 'react';
import TaskRenderCard from './TaskRenderCard';
 
const TasksManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((res) => res.json())
      .then((data) => {
 
        setTasks(data);
  
       
      });
    }, []);
    

 console.log(tasks)

  // Function to categorize tasks into today, upcoming, and previous
  const categorizeTasks = () => {
    const today = new Date().toISOString().split('T')[0];
    const upcoming = [];
    const previous = [];

    const categorizedTasks = tasks.reduce((acc, task) => {
      if (task.deadline.split('T')[0] === today) {
        acc.today.push(task);
      } else if (new Date(task.deadline) > new Date()) {
        upcoming.push(task);
      } else {
        previous.push(task);
      }
      return acc;
    }, { today: [] });

    return {
      ...categorizedTasks,
      upcoming,
      previous,
    };
  };

  const { today, upcoming, previous } = categorizeTasks();


  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center mb-6">Tasks Manager</h1>

      <div className="grid grid-cols-3 gap-6">
        {/* Today's Tasks */}
        <div>
          <h2 className="text-xl font-bold mb-2">Today's Tasks</h2>
          {today.map(task => (
           <TaskRenderCard key={task._id} task={task}/>
          ))}
        </div>

        {/* Upcoming Tasks */}
        <div>
          <h2 className="text-xl font-bold mb-2">Upcoming Tasks</h2>
          {upcoming.map(task => (
            <TaskRenderCard key={task._id} task={task}/>
          ))}
        </div>

        {/* Previous Tasks */}
        <div>
          <h2 className="text-xl font-bold mb-2">Previous Tasks</h2>
          {previous.map(task => (
             <TaskRenderCard key={task._id} task={task}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksManager;
