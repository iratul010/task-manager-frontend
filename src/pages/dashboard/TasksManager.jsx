import { useState, useEffect } from 'react';
import TaskRenderCard from './TaskRenderCard';
import { toast } from 'react-toastify';

const TasksManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:5000/task/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete task');
        }

        const data = await response.json();
        console.log(data);
        toast.success("Task deleted successfully");

        // Remove deleted task from state
        setTasks(tasks.filter(task => task._id !== id));
      } catch (error) {
        console.error('Error deleting task:', error);
        toast.error('Failed to delete task');
      }
    }
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log('Edit task with ID:', id);
  };

  // Function to categorize tasks into today, upcoming, and previous
  const categorizeTasks = () => {
    const today = new Date().toISOString().split('T')[0];
    const categorizedTasks = tasks.reduce((acc, task) => {
      if (task.deadline.split('T')[0] === today) {
        acc.today.push(task);
      } else if (new Date(task.deadline) > new Date()) {
        acc.upcoming.push(task);
      } else {
        acc.previous.push(task);
      }
      return acc;
    }, { today: [], upcoming: [], previous: [] });

    return categorizedTasks;
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
            <TaskRenderCard key={task._id} task={task} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))}
        </div>

        {/* Upcoming Tasks */}
        <div>
          <h2 className="text-xl font-bold mb-2">Upcoming Tasks</h2>
          {upcoming.map(task => (
            <TaskRenderCard key={task._id} task={task} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))}
        </div>

        {/* Previous Tasks */}
        <div>
          <h2 className="text-xl font-bold mb-2">Previous Tasks</h2>
          {previous.map(task => (
            <TaskRenderCard key={task._id} task={task} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksManager;
