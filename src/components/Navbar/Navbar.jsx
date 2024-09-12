'use client';

import React from 'react'; // Ensure React is imported
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';
import { useSidebar } from '../context/SidebarContext';

const Navbar = () => {
  // Destructure context values
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  return (
    <>
      <SearchBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};

export default Navbar;
