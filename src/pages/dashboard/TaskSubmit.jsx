import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

const TaskSubmit = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [deadline, setDeadline] = useState(new Date('2024-06-14')); // Set default deadline
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      taskTitle,
      taskDescription,
      deadline: deadline.toISOString().split('T')[0], // Convert date to yyyy-MM-dd format
      file: file ? { name: file.name, url: URL.createObjectURL(file) } : null,
    };

    try {
      const response = await fetch('http://localhost:5000/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      toast.success('Task submitted successfully!');

      // Reset form state after successful submission
      setTaskTitle('');
      setTaskDescription('');
      setDeadline(new Date('2024-06-14')); // Reset deadline to default
      setFile(null);

    } catch (error) {
      console.error('There was an error submitting the Task!', error);
      toast.error('There was an error submitting the Task!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Submit Your Task</h1>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Task Title</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Task Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Deadline</label>
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              dateFormat="yyyy-MM-dd"
              popperModifiers={{
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                  boundariesElement: 'viewport',
                },
              }}
              popperPlacement="bottom-start"
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
              placeholderText="YYYY-MM-DD"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">File Upload (Optional)</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskSubmit;
