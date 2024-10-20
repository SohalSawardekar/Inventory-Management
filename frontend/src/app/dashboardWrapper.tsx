"use client";

import React, { useEffect } from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashBoardLayout = ({children}: {children: React.ReactNode}) => {
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  );

  const isDarkMode = useAppSelector(
    (state) => state.global.isDarkMode
  ) 

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  })

  return (
    <div className={`light flex bg-green-50 text-gray-900 w-full  min-h-screen ${isDarkMode?"dark":"light"}`}>
        <Sidebar />
        <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSideBarCollapsed ? "md:pl-24": "md:pl-72"} `}>
            <Navbar />
            {children}
        </main>
    </div>
  )
}

const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
 
  return (
    <StoreProvider>
      <DashBoardLayout>{children}</DashBoardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper;