import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = () => {
  const { googleLogin,setLoading,loading} = useAuth();
 
  const handleGoogleSignIn = () => {
    googleLogin().then(data=>{
 
         console.log(data)
         if(data?.user?.email){
          const userInfo ={
            email:data?.user?.email,
            name:data?.user?.displayName
          }
         fetch('http://localhost:5000/user',{
          method:'POST',
          headers:{
            'Content-type':'application/json',
          },
          body:JSON.stringify(userInfo)
         })
         }
 
      })
      .catch((error) => {
        console.error("Login failed: ", error);
        setLoading(false);  
 
     });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Replace with your actual authentication logic (e.g., API call)
    if (email === "admin" && password === "password") {
      // Successful login logic (e.g., store authentication token in localStorage)
      console.log("Login successful!");
      setError("");
      setEmail("");
      setPassword("");
    } else {
      setError("Invalid email or password.");
    }
  };
if(loading){
  return <LoadingSpinner/>
}
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 px-4 lg:px-0">
      {/* Left Column: Login Form */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 lg:p-12">
        <h2 className="lg:text-4xl text-3xl font-bold pb-4 text-green-600">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              className={`appearance-none border-b-2 ${
                emailFocused ? "border-green-500" : "border-gray-500"
              } w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              className={`appearance-none border-b-2 ${
                passwordFocused ? "border-green-500" : "border-gray-500"
              } w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>

      {/* Middle Column: Or Divider */}
      <div className="custom_or h-full lg:h-80">
        <span className="custom_border "></span>
        <span className="text-center px-4 text-2xl font-bold p-2">Or</span>
        <span className="custom_border  "></span>
      </div>

      {/* Right Column: Social Buttons */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/3 gap-3">
        <h2 className="text-lg lg:text-xl text-center text-zinc-500">
          Don't have an account? 
          <span className="block mt-1">
            Please 
            <Link to='/register' className="text-red-400 ml-1 underline hover:no-underline">Register</Link>
          </span>
        </h2>
        <hr className="w-full border-t border-gray-300" />
        <div className="flex gap-5">
          <button onClick={ handleGoogleSignIn} className="bg-red-500 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:shadow-outline mt-2 lg:mt-0 p-3">
            Google
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline mt-2 lg:mt-0 p-3">
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
