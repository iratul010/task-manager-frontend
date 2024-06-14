 
import { FaTwitter, FaFacebook,   FaLinkedin ,FaGoogle} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Task Manager</h2>
            <p className="text-sm mt-2">Efficiently organize, prioritize, and achieve your tasks.</p>
            <div className="flex mt-4">
              <a href="#" className="text-gray-400 hover:text-white mr-4"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white mr-4"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white mr-4"><FaGoogle size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="text-sm mt-2">Email: info@taskmanager.com</p>
            <p className="text-sm">Phone: +1234567890</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Links</h2>
            <ul className="text-sm mt-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <hr className=" my-6"/>
        <p className="text-center text-sm">&copy; 2024 Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
