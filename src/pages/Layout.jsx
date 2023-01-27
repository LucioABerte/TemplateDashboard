import React, { useState } from 'react';
import { HeaderCopy, SidebarCopy } from '../components';
import { SidebarItem } from '../components/SidebarItem';



function Layout() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen lg:h-screen overflow-hidden ">
        {/* Sidebar */}
        <SidebarCopy
          sidebarOpen={sidebarOpen}
          setSidebarOpen={ setSidebarOpen }
        />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-hidden overflow-x-hidden dark:bg-slate-900">
          {/*  Site header */}
          <HeaderCopy
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}           
          />

        </div>
      </div>
    </>
  );
}

export default Layout;
