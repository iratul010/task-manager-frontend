import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const Register = () => {
  const { googleLogin,loading} = useAuth();
 
  const handleGoogleSignIn = () => {
     googleLogin();
  };


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const formRef = useRef(null);

  const handleRegister = (e) => {

    e.preventDefault();

    // Basic validation
    if (!username || !email || !password || !confirmPassword || !image) {
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Replace with your actual registration logic (e.g., API call)
    // For demonstration, log the inputs
    console.log("Registration successful!", { username, email, password, image });
    setError("");
    
    // Reset form and state
    formRef.current.reset();
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
 if(loading){
  return <LoadingSpinner/>
 }
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 px-4 lg:px-0">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 lg:p-12">
        <h2 className="lg:text-4xl text-3xl font-bold pb-4 text-red-400">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form ref={formRef} onSubmit={handleRegister} className="w-full">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
              className={`appearance-none border-b-2 ${
                usernameFocused ? "border-green-500" : "border-gray-500"
              } w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`}
              placeholder="Enter your username"
              required
            />
          </div>
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
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="appearance-none border-b-2 border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setConfirmPasswordFocused(true)}
              onBlur={() => setConfirmPasswordFocused(false)}
              className={`appearance-none border-b-2 ${
                confirmPasswordFocused ? "border-green-500" : "border-gray-500"
              } w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`}
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      {/* Middle Column: Or Divider */}
      <div className="custom_or h-full lg:h-80">
        <span className="custom_border   "></span>
        <span className="text-center px-4 text-2xl font-bold p-2">Or</span>
        <span className="custom_border "></span>
      </div>

      {/* Right Column: Social Buttons */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/3 gap-3">
        <h2 className="text-lg lg:text-xl text-center text-zinc-500">
          You have already an account? 
          <span className="block mt-1">
            Please 
            <Link to='/login' className="text-green-400 ml-1 underline hover:no-underline">Login</Link>
          </span>
        </h2>
        <hr className="w-full border-t border-gray-300" />
        <div className="flex gap-5 pb-2">
          <button onClick={handleGoogleSignIn} className="bg-red-500 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:shadow-outline mt-2 lg:mt-0 p-3">
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

export default Register;
