import React from 'react';
import logo from '../Icons/logo.png'
import { RiHome2Line  } from "react-icons/ri";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div>
      <div className={`sidebar flex flex-col border-r-2 fixed top-0 bottom-0 z-20 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-[#ffffff] transition-transform ${isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full'}`}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex justify-between">
            <img className='w-[180px]' src={logo}/>
            <button onClick={toggleSidebar}>
              <HiChevronDoubleLeft className='text-[#9696e6]' size={25}/>
            </button>
          </div>
        </div>
        <div className='flex-1 px-3'>
          <Link to='/'>
          <div className='flex items-center mt-10 text-md text-[#686868] gap-3.5 font-medium hover:bg-gray-800 hover:text-white rounded-md  cursor-pointer p-2 '>
          <RiHome2Line  size={30}/>
          <p className=' '>Home</p>
          </div>
          </Link>
          
          <Link to='/jobs' >
          <div className='flex items-center mt-2 text-md text-[#686868] gap-3.5 font-medium hover:bg-gray-800 hover:text-white rounded-md  cursor-pointer p-2   '>
          <RiHome2Line  size={30}/>
          <p className=' '>Jobs</p>
          </div>
          </Link>
          <Link to='/profile'>
          <div className='flex items-center mt-2 text-md text-[#686868] gap-3.5 font-medium hover:bg-gray-800 hover:text-white rounded-md  cursor-pointer p-2  '>
          <RiHome2Line  size={30}/>
          <p className=' '>Profile</p>
          </div>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
