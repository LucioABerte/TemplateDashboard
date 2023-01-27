import React, { useContext } from 'react';
import { IoMoon } from 'react-icons/io5';
import { IoMdSunny } from 'react-icons/io';
import ThemeContext from '../context/ThemeProvider';


export function HeaderCopy({ sidebarOpen, setSidebarOpen,}) {
  
  const { colorTheme, setTheme } = useContext(ThemeContext);


  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30 fade-in-fwd dark:bg-slate-800 dark:border-slate-800">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px ">
          {/* Header: Left side */}
          <div className="flex ">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              
              {<svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>}

            </button>
          </div>

          <span className="font-semibold text-slate-800 dark:text-slate-300 w-[75%]">
              
          </span>

          {/* Header: Right side */}
          <div className="flex items-center">
            <button
              className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition duration-150 rounded-full ml-3"
              onClick={() => setTheme(colorTheme)}
            >
              {colorTheme === 'light' ? (
                <IoMdSunny className="text-slate-300" />
              ) : (
                <IoMoon />
              )}
            </button>

            <div className="w-px h-6 bg-gray-600 mx-3 text-gray-600"></div>
              {/* Toggle Right side  */}




          </div>
        </div>
      </div>
    </header>
  );
}
