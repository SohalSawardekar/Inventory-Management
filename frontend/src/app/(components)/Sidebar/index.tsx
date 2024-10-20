"use client";

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/state';
import { Menu } from 'lucide-react';
import React from 'react'

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  ); 

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
  };

  const sideBarClassNames =  `fixed flex flex-col ${isSideBarCollapsed? "w-0 md:w-16": "w-72 md:w-64"} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div>
      {/* top logo */}
      <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
        <div>logo</div>
        <h1 className='font-extrabold text-2xl'>EDSTCOK</h1>   
        <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={() => {toggleSideBar()}}>
            <Menu className='w-4 h-4' /> 
        </button>
      </div>

      {/* links  */}
      <div className='flex-grow mt-8'> links </div>
      {/* footer */}
      <div className='text-center text-xs text-gray-500'>&copy; 2024 lorem</div>
    </div>
  );
}

export default Sidebar;
