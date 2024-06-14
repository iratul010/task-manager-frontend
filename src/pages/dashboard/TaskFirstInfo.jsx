import { useState } from "react";

const TaskFirstInfo = () => {
  const tasks = [
    {
      id: 1,
      title: 'Complete project documentation',
      description: 'Finish the documentation for the project by EOD',
      deadline: '2024-06-14',
      fileSubmitted: true,
      file: {
        name: 'ProjectDocumentation.pdf',
        url: 'https://example.com/files/ProjectDocumentation.pdf',
        // other metadata as needed
      }
    },
    {
      id: 2,
      title: 'Team meeting',
      description: 'Attend the team sync-up meeting at 3 PM',
      deadline: '2024-06-14',
      fileSubmitted: false,
      file: null // No file submitted for this task
    },
    {
      id: 3,
      title: 'Code review',
      description: 'Review the codebase for the new feature implementation',
      deadline: '2024-06-15',
      fileSubmitted: true,
      file: {
        name: 'CodeReview.docx',
        url: 'https://example.com/files/CodeReview.docx',
        // other metadata as needed
      }
    },
    {
      id: 4,
      title: 'Client presentation',
      description: 'Prepare and present the project progress to the client',
      deadline: '2024-06-16',
      fileSubmitted: false,
      file: null // No file submitted for this task
    },
    {
      id: 5,
      title: 'Weekly report',
      description: 'Submit the weekly status report to the manager',
      deadline: '2024-06-13',
      fileSubmitted: true,
      file: {
        name: 'WeeklyReport.pdf',
        url: 'https://example.com/files/WeeklyReport.pdf',
        // other metadata as needed
      }
    },
    {
      id: 6,
      title: 'Home Rent',
      description: 'Submit the weekly Home Rent',
      deadline: '2024-06-15',
      fileSubmitted: false,
      file: null // No file submitted for this task
    },
    {
      id: 7,
      title: 'Home Rent 2',
      description: 'Submit the weekly Home Rent',
      deadline: '2024-06-12',
      fileSubmitted: true,
      file: {
        name: 'HomeRent2.pdf',
        url: 'https://example.com/files/HomeRent2.pdf',
        // other metadata as needed
      }
    },
    {
      id: 8,
      title: 'Home Rent 3 ',
      description: 'Submit the weekly Home Rent',
      deadline: '2024-06-13',
      fileSubmitted: false,
      file: null // No file submitted for this task
    },
  ];


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

  return (
    <div className="p-4 min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Management Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-6xl">
        <div>
          <h2 className="text-xl font-bold mb-2">Today's Tasks</h2>
          <ul className="space-y-4">
            {todayTasks.length ? todayTasks.map(task => (
              <li key={task.id} className="p-4 border rounded-lg shadow-sm bg-white">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
                {task.fileSubmitted ? (
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
              <li key={task.id} className="p-4 border rounded-lg shadow-sm bg-white">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
                {task.fileSubmitted ? (
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
              <li key={task.id} className="p-4 border rounded-lg shadow-sm bg-gray-100">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
                {task.fileSubmitted ? (
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
