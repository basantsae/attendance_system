import React, { createContext, useContext } from 'react';
import { MoreVertical } from 'lucide-react'; // Ensure you have lucide-react installed

const SidebarContext = createContext();

export default function AdminSidebar({ children, expanded }) {
  return (
    <aside className={`h-screen fixed ${expanded ? 'w-64' : 'w-16'} transition-all duration-300`}>
      <nav className="h-full flex flex-col border-r shadow-sm bg-white text-black">
        <div style={{ height: 68 }} className="p-4 pb-2 flex gap-2 items-center bg-bgcolor">
        <img
                src="https://afl.muliatech.web.id/img/xlogo.png.pagespeed.ic.TmJe1NYsoE.webp"
                className="rounded-full shadow-lg"
                style={{ width: 40, height: 40 }}
                alt="Logo"
              />
          {expanded && (
            <div className="flex justify-center items-center gap-1">
              <span className="font-bold text-white">Attendance FR</span>
            </div>
          )}
        </div>
        {expanded && (
          <div className="user-panel mt-3 mb-3 ml-3 flex items-center">
            <img
              src="https://afl.muliatech.web.id/uploads/xdefault-user.png.pagespeed.ic.QpAVnuG4kz.webp"
              className="rounded-full shadow-lg"
              style={{ width: 50, height: 50 }}
              alt="UserImage"
            />
            <div className="info ml-3">
              <a href="/#" className="block text-black font-weight-bolder">
                Administrator
              </a>
            </div>
          </div>
        )}
        <hr />
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3 items-center">
          <img src="/#" alt="" />
          <div
            className={`flex items-center overflow-hidden transition-all ${
              expanded ? 'w-52 ml-3' : 'w-0'
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">constGenius</h4>
              <span className="text-xs text-gray-600">constgenius@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, arrow, onClick }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li style={{paddingLeft:'0.3rem',paddingRight:'0.3rem'}}
      className={`relative flex items-center py-2 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
          : 'hover:bg-indigo-50 text-gray-600'
      }`}
      onClick={onClick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0'
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? '' : 'top-2'
          }`}
        ></div>
      )}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
      {expanded && arrow}
    </li>
  );
}

