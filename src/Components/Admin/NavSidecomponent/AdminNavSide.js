import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'; // Import these hooks
// import Navbar from "../component/Navbar";
// import Sidebar from "../component/Sidebar";
import { SidebarItem } from "../NavSidecomponent/AdminSidebar";
import icon_a from '../AdminImgs/icons8-meeting-30.png'
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
    const [expandedMeetings, setExpandedMeetings] = useState(false);
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
      if (section === 'meetings') setExpandedMeetings(!expandedMeetings);
    };
    
  return (
    <>
                <SidebarItem
              icon={<LayoutDashboard size={30} />}
              text="Dashboard"
              active={activeItem === 'adminDashboard'} // Check if item is active
              onClick={() => handleItemClick('adminDashboard')} // Handle click
            />
            <SidebarItem icon={<Database size={30} />} text="Attendence" active={activeItem === 'attendances'} // Check if item is active
              onClick={() => handleItemClick('attendances')} />
            <SidebarItem icon={<ChartArea size={30} />} text="Analytics" active={activeItem === 'analytics'} 
              onClick={() => handleItemClick('analytics')} />
            <SidebarItem
              icon={<MapPinned size={30} />}
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
          <SidebarItem icon={<List size={30} />} text="List" active={activeItem === 'areaList'} 
              onClick={() => handleItemClick('areaList')}/>
          <SidebarItem icon={<SquarePen size={30} />} text="Add or Update" active={activeItem === 'areaEdit'} 
              onClick={() => handleItemClick('areaEdit')}/>
          {/* Add more items as needed */}
        </>
      )}
            <SidebarItem
              icon={<Shuffle size={30} />}
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
          <SidebarItem icon={<List size={30} />} text="List" active={activeItem === 'shiftList'} 
              onClick={() => handleItemClick('shiftList')}/>
          <SidebarItem icon={<SquarePen size={30} />} text="Add or Update" active={activeItem === 'shiftEdit'} 
              onClick={() => handleItemClick('shiftEdit')}/>
          {/* Add more items as needed */}
        </>
      )}

<SidebarItem
              icon={<img alt='' src={icon_a}/>}
              text="Meeting"
              arrow={
                expandedMeetings ? (
                  <ChevronDown className="w-6 h-6" />
                ) : (
                  <ChevronLeft className="w-6 h-6" />
                )
              }
              onClick={() => toggleArrow('meetings')}
            />
     {expandedMeetings && (
        <>
          <SidebarItem icon={<List size={30} />} text="Meeting List"  active={activeItem === 'meeting'} 
              onClick={() => handleItemClick('meeting')}  />
          <SidebarItem icon={<SquarePen size={30} />} text="Add New Meeting"  active={activeItem === 'addMeeting'} 
              onClick={() => handleItemClick('addMeeting')} />
          {/* Add more items as needed */}
        </>
      )}
        
            <SidebarItem icon={<Calendar size={30} />} text="Events" active={activeItem === 'events'} 
              onClick={() => handleItemClick('events')} />
            <SidebarItem
              icon={<UsersRound size={30} />}
              text="Employees"
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
          <SidebarItem icon={<List size={30} />} text="Employees List"  active={activeItem === 'users'} 
              onClick={() => handleItemClick('users')}  />
          <SidebarItem icon={<SquarePen size={30} />} text="Add or Update"  active={activeItem === 'add_update'} 
              onClick={() => handleItemClick('add_update')} />
          {/* Add more items as needed */}
        </>
      )}
        <SidebarItem icon={<UserRoundCheck size={30} />} text="Profile" active={activeItem === 'profile'} 
          onClick={() => handleItemClick('profile')} />
        <SidebarItem icon={<LogOut size={30} />} text="LogOut" />


        
</>
  );
}

export default AdminNavSide;

