import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'; // Import these hooks
// import Navbar from "../component/Navbar";
// import Sidebar from "../component/Sidebar";
import { SidebarItem } from "../NavSidecomponent/AdminSidebar";
import {
  ChevronDown,
  ChevronLeft,
  LayoutDashboard,
  Database,
  ChartArea,
  MapPinned,
  Shuffle,
  LogOut,
  UserRoundCheck,
  Settings,
  UsersRound,
  Calendar,
  List,SquarePen,FolderUp
} from "lucide-react";

function AdminNavSide() {
    const [expandedAreas, setExpandedAreas] = useState(false);
    const [expandedShifts, setExpandedShifts] = useState(false);
    const [expandedUsers, setExpandedUsers] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard'); // State to manage the active sidebar item
    
    const navigate = useNavigate();
    // const location = useLocation();

    // Function to handle item click
    const handleItemClick = (item) => {
    setActiveItem(item); // Set active item
    navigate(`/admin/${item}`); // Navigate to the corresponding route
    };

  
    const toggleArrow = (section) => {
      if (section === 'areas') setExpandedAreas(!expandedAreas);
      if (section === 'shifts') setExpandedShifts(!expandedShifts);
      if (section === 'users') setExpandedUsers(!expandedUsers);
    };
    
  return (
    <>
       
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active={activeItem === 'adminDashboard'} // Check if item is active
              onClick={() => handleItemClick('adminDashboard')} // Handle click
            />
            <SidebarItem icon={<Database size={20} />} text="Attendence" active={activeItem === 'attendances'} // Check if item is active
              onClick={() => handleItemClick('attendances')} />
            <SidebarItem icon={<ChartArea size={20} />} text="Analytics" active={activeItem === 'analytics'} 
              onClick={() => handleItemClick('analytics')} />
            <SidebarItem
              icon={<MapPinned size={20} />}
              text="Areas"
              arrow={
                expandedAreas ? (
                  <ChevronDown className="w-6 h-6" />
                ) : (
                  <ChevronLeft className="w-6 h-6" />
                )
              }
              onClick={() => toggleArrow('areas')}
            />
       {expandedAreas && (
        <>
          <SidebarItem icon={<List size={20} />} text="List" active={activeItem === 'areaList'} 
              onClick={() => handleItemClick('areaList')}/>
          <SidebarItem icon={<SquarePen size={20} />} text="Add or Update" active={activeItem === 'areaEdit'} 
              onClick={() => handleItemClick('areaEdit')}/>
          {/* Add more items as needed */}
        </>
      )}
            <SidebarItem
              icon={<Shuffle size={20} />}
              text="Shifts"
              arrow={
                expandedShifts ? (
                  <ChevronDown className="w-6 h-6" />
                ) : (
                  <ChevronLeft className="w-6 h-6" />
                )
              }
              onClick={() => toggleArrow('shifts')}
            />

     {expandedShifts && (
        <>
          <SidebarItem icon={<List size={20} />} text="List" active={activeItem === 'shiftList'} 
              onClick={() => handleItemClick('shiftList')}/>
          <SidebarItem icon={<SquarePen size={20} />} text="Add or Update" active={activeItem === 'shiftEdit'} 
              onClick={() => handleItemClick('shiftEdit')}/>
          {/* Add more items as needed */}
        </>
      )}
        
            <SidebarItem icon={<Calendar size={20} />} text="Events" active={activeItem === 'events'} 
              onClick={() => handleItemClick('events')} />
            <SidebarItem
              icon={<UsersRound size={20} />}
              text="Users"
              arrow={
                expandedUsers ? (
                  <ChevronDown className="w-6 h-6" />
                ) : (
                  <ChevronLeft className="w-6 h-6" />
                )
              }
              onClick={() => toggleArrow('users')}
            />
     {expandedUsers && (
        <>
          <SidebarItem icon={<List size={20} />} text="List"  active={activeItem === 'users'} 
              onClick={() => handleItemClick('users')}  />
          <SidebarItem icon={<SquarePen size={20} />} text="Add or Update"  active={activeItem === 'add_update'} 
              onClick={() => handleItemClick('add_update')} />
          <SidebarItem icon={<FolderUp size={20} />} text="Import CSV" active={activeItem === 'importcsv'} 
              onClick={() => handleItemClick('importcsv')}/>
          {/* Add more items as needed */}
        </>
      )}
            
            <SidebarItem icon={<Settings size={20} />} text="Settings" active={activeItem === 'settings'} 
              onClick={() => handleItemClick('settings')}/>
            <SidebarItem icon={<UserRoundCheck size={20} />} text="Profile" active={activeItem === 'profile'} 
              onClick={() => handleItemClick('profile')} />
            <SidebarItem icon={<LogOut size={20} />} text="LogOut" />
    </>
  );
}

export default AdminNavSide;

