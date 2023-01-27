import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const SidebarItem = ({title, path, src}) => {
  const location = useLocation();
  const { pathname } = location;

    return (
    <li title={title}
    className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
      pathname === '/'+path && 'bg-slate-900'
    }`}
  >
    <NavLink
      end
      to= {"/"+path}
      className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
        pathname === '/'+path && 'hover:text-slate-200'
      }`}
    >
      <div className="flex items-center">
          <img src={src} alt="" className="shrink-0 h-6 w-6" />

        <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
          {title}
        </span>
      </div>
    </NavLink>
  </li>)

}