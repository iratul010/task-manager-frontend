import { Link } from "react-router-dom";

 

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-red-500">Oops!</h1>
      <p className="text-xl text-gray-800 mb-4">Something went wrong.</p>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for might be temporarily unavailable.</p>
      <Link to='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
