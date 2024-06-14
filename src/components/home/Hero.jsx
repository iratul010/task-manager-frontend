import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-full  home_container  flex flex-col justify-center items-center">
      <div className="home_left relative">
        <div className="relative w-full h-[50vh] flex justify-center items-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center text-white">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Welcome to</h1>
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">Task Management</h2>
  <p className="text-lg max-w-md mx-auto">
    Efficiently organize, prioritize, and achieve your tasks with our intuitive management solutions.
  </p>
</div>

          </div>
        </div>
      </div>
      <div className="home_right h-full flex justify-center items-center">
        <Link to='/login' className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
        Let’s Explore &#x1F680;
        </Link>
      </div>
    </div>
  );
};

export default Hero;
