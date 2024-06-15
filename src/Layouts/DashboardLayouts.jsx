import { useEffect, useState } from "react";
import { Link, Outlet, json } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const SidebarMenu = () => {
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [error, setError] = useState('');
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(user);
 
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/user/${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => setUserInfo(data))
        .catch((err) => {
          console.error('Failed to fetch user info:', err);
          setError('Failed to fetch user info.');
        });
    }
  }, [user]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="flex h-[100vh] overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-green-800 text-gray-100 w-64 flex-shrink-0 overflow-y-auto transition-all duration-500 ease-out ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        {/* Sidebar content */}
        <div className="p-4 h-[90%]">
          <Link
            to="/dashboard"
            className="flex flex-row items-center gap-3 bg-green-900 p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" />
            </svg>
            <h2 className="text-2xl font-bold text-white">Dashboard</h2>
          </Link>
          {/* Menu items */}
          <ul className="mt-6 flex flex-col justify-end h-full">
            <li>
              <Link
                to="profile"
                className="flex flex-row  gap-2 items-center py-2 px-4 text-sm rounded hover:bg-gray-200 hover:text-[#333]"
              >
                <span>Profile</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="fill-current w-4 h-4 mr-2 transition-colors duration-300"
                >
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="task-manager"
                className="flex flex-row  gap-2 items-center py-2 px-4 text-sm rounded hover:bg-gray-200 hover:text-[#333]"
              >
                <span>Task Manager</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="fill-current w-4 h-4 mr-2 transition-colors duration-300"
                >
                  <path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="task-submit"
                className="flex flex-row  gap-2 items-center py-2 px-4 text-sm rounded hover:bg-gray-200 hover:text-[#333]"
              >
                <span>Task Submit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="fill-current w-4 h-4 mr-2 transition-colors duration-300"
                >
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="task-update"
                className="flex flex-row  gap-2 items-center py-2 px-4 text-sm rounded hover:bg-gray-200 hover:text-[#333]"
              >
                <span>Task Update</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="fill-current w-4 h-4 mr-2 transition-colors duration-300"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h200v80H160v480h640v-480H600v-80h200q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-184L280-544l56-56 104 104v-304h80v304l104-104 56 56-200 200Z" />
                </svg>
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  /* Handle logout logic */
                }}
                className="flex flex-row  gap-2 items-center py-2 px-4 text-sm rounded w-full text-left hover:bg-gray-200 hover:text-[#333] focus:outline-none"
              >
                <span> Logout</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="fill-current w-4 h-4 mr-2 transition-colors duration-300"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                </svg>
              </button>
            </li>
            <li className="mt-auto bg-slate-900">
              <Link
                to="/"
                className="py-4 px-4 text-sm rounded w-full text-left hover:bg-gray-200 hover:text-[#333] focus:outline-none flex gap-4 justify-center items-center "
              >
                Back to Home
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  className="fill-current w-4 h-4 mr-2 transition-colors duration-300"
                >
                  <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex flex-col flex-1 overflow-y-auto">
        {/* Top bar with menu button */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4">
          <button
            className="text-gray-500 focus:outline-none lg:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
          <h1 className="text-lg font-semibold">Welcome, Today</h1>
          {/* Profile section */}
          <div className="flex items-center space-x-4 py-4">
            <Link to="/profile" className="flex items-center space-x-2">
              {userInfo?.email ? (
                <img
                  src={userInfo?.photoURL}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                </svg>
              )}
              <span className="font-semibold">
                {userInfo ? userInfo?.name : "User"}
              </span>
            </Link>
          </div>
        </header>

        {/* Main content */}
        <div className="p-4">
          {/* <Outlet> for nested routes */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SidebarMenu;
