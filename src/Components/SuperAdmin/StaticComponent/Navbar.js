import React from 'react';

const Navbar = ({ setExpanded }) => {
  const CustomMenuIcon = ({ color }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <nav className="bg-bgcolor text-white p-4 flex items-center gap-5" style={{width:"100%" , position:"fixed"}}>
      <button
        onClick={() => setExpanded(curr => !curr)}
        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
      >
        <CustomMenuIcon color="#000" />
      </button>
      <h1 className="text-xl">Attendance</h1>
    </nav>
  );
};

export default Navbar;
