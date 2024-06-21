/* eslint-disable react/prop-types */
 
import LoadingSpinner from '../../components/LoadingSpinner';
import useAuth from '../../hooks/useAuth';
 

const TaskRenderCard = ({ task, handleDelete, handleEdit  }) => {
  const {loading} = useAuth()
 
  const {taskTitle,taskDescription,deadline,file,_id}= task
 


  
  
 if(loading){
  return <LoadingSpinner/>
 }

  return (
    <div key={_id} className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold">{taskTitle}</h3>
                <p className="text-gray-700">{taskDescription}</p>
                <p className="text-sm text-gray-500">Deadline: {deadline}</p>
                {file ? (
                  <div className="mt-2">
                    <p className="text-green-600">File Name: {file.name}</p>
                    <a href={file.url} className="text-blue-600 hover:underline" download>Download File</a>
                
                  </div>
                ) : (
                  <div className="mt-2">
                    <p className="text-red-600">File not upload</p>
                    {/* Optionally provide a button or link to upload a file */}
                  </div>
                )}
      <div className="flex justify-end space-x-3">
        <button
          onClick={() => handleEdit(_id)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskRenderCard;