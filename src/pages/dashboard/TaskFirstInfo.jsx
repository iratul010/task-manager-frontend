import React, { useEffect, useState } from 'react';

const TaskFirstInfo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched tasks:', data); // Log fetched tasks for debugging
        setTasks(data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const isToday = (deadline) => {
    const today = new Date().toISOString().split('T')[0];
    return deadline === today;
  };

  const isWithinNextWeek = (deadline) => {
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Calculate 7 days ahead
    const taskDeadline = new Date(deadline);
    return taskDeadline <= nextWeek;
  };

  const isPrevious = (deadline) => {
    const today = new Date().toISOString().split('T')[0];
    return deadline < today;
  };

  const sliceAndLimitTasks = (filteredTasks, limit) => {
    return filteredTasks.slice(0, limit);
  };

  // Filter tasks
  const todayTasks = sliceAndLimitTasks(tasks.filter(task => isToday(task.deadline)), 3);
  const upcomingTasks = sliceAndLimitTasks(tasks.filter(task => isWithinNextWeek(task.deadline)), 2);
  const previousTasks = sliceAndLimitTasks(tasks.filter(task => isPrevious(task.deadline)), 2);

  console.log('Today\'s tasks:', todayTasks); // Log filtered today's tasks for debugging

  return (
    <div className="p-4 min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Management Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-6xl">
        <div>
          <h2 className="text-xl font-bold mb-2">Today's Tasks</h2>
          <ul className="space-y-4">
            {todayTasks.length ? todayTasks.map(task => (
              <li key={task._id} className="p-4 border rounded-lg shadow-sm bg-white">
                <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
                <p className="text-gray-700">{task.taskDescription}</p>
                <p className="text-sm text-gray-500">Deadline: {new Date(task.deadline).toISOString().split('T')[0]}</p>
                {task.file ? (
                  <div className="mt-2">
                    <p className="text-green-600">File submitted: {task.file.name}</p>
                    <a href={task.file.url} className="text-blue-600 hover:underline">Download File</a>
                    {/* Optionally display other file metadata */}
                  </div>
                ) : (
                  <div className="mt-2">
                    <p className="text-red-600">File not submitted</p>
                    {/* Optionally provide a button or link to upload a file */}
                  </div>
                )}
              </li>
            )) : (
              <p>No tasks for today!</p>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Upcoming Tasks</h2>
          <ul className="space-y-4">
            {upcomingTasks.length ? upcomingTasks.map(task => (
              <li key={task._id} className="p-4 border rounded-lg shadow-sm bg-white">
                <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
                <p className="text-gray-700">{task.taskDescription}</p>
                <p className="text-sm text-gray-500">Deadline: {new Date(task.deadline).toISOString().split('T')[0]}</p>
                {task.file ? (
                  <div className="mt-2">
                    <p className="text-green-600">File submitted: {task.file.name}</p>
                    <a href={task.file.url} className="text-blue-600 hover:underline">Download File</a>
                    {/* Optionally display other file metadata */}
                  </div>
                ) : (
                  <div className="mt-2">
                    <p className="text-red-600">File not submitted</p>
                    {/* Optionally provide a button or link to upload a file */}
                  </div>
                )}
              </li>
            )) : (
              <p>No upcoming tasks within the next week!</p>
            )}
          </ul>
          <h2 className="text-xl font-bold mt-8 mb-2">Previous Tasks</h2>
          <ul className="space-y-4">
            {previousTasks.length ? previousTasks.map(task => (
              <li key={task._id} className="p-4 border rounded-lg shadow-sm bg-gray-100">
                <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
                <p className="text-gray-700">{task.taskDescription}</p>
                <p className="text-sm text-gray-500">Deadline: {new Date(task.deadline).toISOString().split('T')[0]}</p>
                {task.file ? (
                  <div className="mt-2">
                    <p className="text-green-600">File submitted: {task.file.name}</p>
                    <a href={task.file.url} className="text-blue-600 hover:underline">Download File</a>
                    {/* Optionally display other file metadata */}
                  </div>
                ) : (
                  <div className="mt-2">
                    <p className="text-red-600">File not submitted</p>
                    {/* Optionally provide a button or link to upload a file */}
                  </div>
                )}
              </li>
            )) : (
              <p>No previous tasks!</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskFirstInfo;
