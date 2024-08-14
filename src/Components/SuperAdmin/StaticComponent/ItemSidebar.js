import { SidebarItem } from './Sidebar';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import {
    LayoutDashboard,UsersRound,UserRoundPlus,NotepadText,ListCheck
  } from "lucide-react";
import profile_img from '../imgs/ecea796b37c2a6a63a1b685eb346d799.png'

function ItemSidebar() {
    // const [isExpanded, setExpanded] = useState(true);
    const [activeItem, setActiveItem] = useState('dashboard'); // State to manage the active sidebar item
    const navigate = useNavigate();

    const handleItemClick = (item) => {
      setActiveItem(item); // Set active item
      navigate(`/superadmin/${item}`); // Navigate to the corresponding route
    };

    return (
      <>
            <SidebarItem
            icon={<LayoutDashboard size={30}/>}
            text="Dashboard"
            active={activeItem === 'dashboard'}
            onClick={() => handleItemClick('dashboard')}
            />

            <SidebarItem
            icon={<img alt='' src={profile_img} width={'30px'} height={'30px'}/>}
            text="Profile"
            active={activeItem === 'profile'}
            onClick={() => handleItemClick('profile')}
            />

            <SidebarItem
            icon={<UserRoundPlus  size={30} />}
            text="Add Subscriber"
            active={activeItem === 'add-subscriber'}
            onClick={() => handleItemClick('add-subscriber')}
            />

            <SidebarItem
            icon={<UsersRound size={30} />}
            text="Subscriber List"
            active={activeItem === 'subscriber-list'}
            onClick={() => handleItemClick('subscriber-list')}
            />

            <SidebarItem
            icon={<NotepadText size={30} />}
            text="Add Plans"
            active={activeItem === 'add-plans'}
            onClick={() => handleItemClick('add-plans')}
            />

            <SidebarItem
            icon={<ListCheck size={30} />}
            text="Plans List"
            active={activeItem === 'plans-list'}
            onClick={() => handleItemClick('plans-list')}
            />
            
      </>
    );
  }

  export default ItemSidebar;