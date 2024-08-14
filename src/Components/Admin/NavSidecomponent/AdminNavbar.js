import React,{useEffect,useState} from "react";
// import { useState, useEffect } from "react";

function AdminNavbar({setExpanded,onUserName }) {

  const [showUserInfo, setShowUserInfo] = useState(false);
    const [userName, setUserName] = useState("Administrator");

  useEffect(() => {
    // Pass the username to the parent component
    onUserName(userName);
  }, [userName, onUserName]);


    const toggleUserInfo = () => {
        setShowUserInfo(!showUserInfo);
      };
    
      // const userName = "Administrator";
      const userImage = "https://afl.muliatech.web.id/uploads/xdefault-user.png.pagespeed.ic.QpAVnuG4kz.webp"; // User image URL
    
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
    <>
    <nav className="bg-bgcolor text-white p-4 flex items-center gap-5" style={{width:"100%" , position:"fixed"}}>
      <div style={{display:"flex",gap:"5px"}}>
      <button
        onClick={() => setExpanded(curr => !curr)}
        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
      >
        <CustomMenuIcon color="#000" />
      </button>
      <h1 className="text-xl">Attendance</h1>
      </div>


      <div className="relative" style={{display:"flex",alignItems:"center"}}>
        <button onClick={toggleUserInfo} className="rounded-md">
          <div className="user-panel flex items-center justify-center">
            <div className="image">
              <img
                src={userImage}
                className="rounded-full shadow-lg"
                style={{ width: 30, height: 30,boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)' }}
                alt="UserImage"
              />
            </div>
            <div className="info ml-3">
              <a href="#" className="block text-white font-weight-bolder">
                {userName}
              </a>
            </div>
          </div>
        </button>
        {showUserInfo && (
          <div className="absolute top-12 right-0 bg-white border rounded-lg p-4 shadow-lg" style={{ width: 280 }}>
            <div style={{display:"flex",alignItems:"center",flexDirection: "column"}}>
              <img
                src={userImage}
                className="rounded-full shadow-lg"
                style={{ width: 72, height: 72 }}
                alt="UserImage"
              />
              <div className="ml-3">
                <p>Hi, {userName}</p>
                <button className="mt-2 p-2 bg-red-500 text-white rounded-md" onClick={() => alert('Logged out')}>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </nav>
    </>
);
}

export default AdminNavbar;
