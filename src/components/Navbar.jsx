import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "./LoadingSpinner";
 

const Navbar = () => {
  const {user,loading,logOut} = useAuth();
 
 const handleLogOut = ()=>{
  logOut();
 }
 
  if(loading){
      return <LoadingSpinner/>
  }
  return (
    <div className=" custom_navbar overflow-hidden">
      <Link to="/" className="navbar_logo">
        <ul className="flex  gap-3 items-center">
          <li>
            <img
              className="h-12 lg:w-[100px] md:w-[80] bg-gray-100 rounded-lg"
              src="../src/assets/logo/tasky.png"
              alt=""
            />
          </li>
          <li>TaskManager</li>
        </ul>
      </Link>
      <input type="checkbox" id="slidebar-active" />

      <label htmlFor="slidebar-active" className="openSlidebar_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>

      {/* Overlays*/}
      <label htmlFor="slidebar-active" className="overlay"></label>
      {/* Container */}
      <div className="slidebar_container">
        <ul className="navbar_links">
          <li>
            <label htmlFor="slidebar-active" className="closeSlidebar_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </label>
          </li>
          <li>
            <Link to=''>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          {user?.email &&
          <>
           <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link onClick={handleLogOut}>LogOut</Link>
          </li>
          </>
          
          }
         {
          !user?.email && <>
           <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          </>
         }
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
