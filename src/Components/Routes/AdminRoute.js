import React ,{useState} from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AdminSidebar from '../Admin/NavSidecomponent/AdminSidebar';
import AdminNavSide from '../Admin/NavSidecomponent/AdminNavSide'
import AdminNavbar from '../Admin/NavSidecomponent/AdminNavbar';
import AdminDashboard from '../Admin/AdminPages/AdminDashboard';
import Attendances from '../Admin/AdminPages/Attendences'; 
import Analytics from '../Admin/AdminPages/Analytics'; 
import UsersList from '../Admin/AdminPages/UsersList'; 
import ADD_Update_Users from '../Admin/AdminPages/ADD_Update_Users'; 
import ImportCSV from '../Admin/AdminPages/ImportCSV'
import AreasList from '../Admin/AdminPages/AreasList';
import EditAreas from '../Admin/AdminPages/EditAreas';
import ShiftsList from '../Admin/AdminPages/ShiftsList';
import EditShifts from '../Admin/AdminPages/EditShifts';
import Events from '../Admin/AdminPages/Events'; 
import Settings from '../Admin/AdminPages/Settings'; 
import Profile from '../Admin/AdminPages/Profile'; // Ensure this component exists
import { initialUsers } from '../Admin/AdminServices/Data';

// import LogOut from './LogOut'; // Ensure this component exists


function SuperAdminRoute() {
    const [userName, setUserName] = useState("");
    const handleUserName = (name) => {
      setUserName(name);
    };
  
    const data = [
      { 
        name: "John Doe", 
        inDate: "2023-01-01", 
        inTime: "08:00", 
        outDate: "2023-01-01", 
        outTime: "17:00", 
        workHour: "8", 
        overTime: "0", 
        lateTime: "0", 
        earlyOutTime: "0", 
        inLocation: "Office A", 
        outLocation: "Office A" 
      },
      { 
        name: "Jane Doe", 
        inDate: "2023-01-02", 
        inTime: "08:30", 
        outDate: "2023-01-02", 
        outTime: "17:00", 
        workHour: "7.5", 
        overTime: "0.5", 
        lateTime: "0.5", 
        earlyOutTime: "0", 
        inLocation: "Office B", 
        outLocation: "Office B" 
      },
      // Add more sample data as needed
    ];
  
    // Aggregating the data
    const aggregateData = (data) => {
      return data.reduce((acc, curr) => {
        const date = curr.inDate;
        if (!acc[date]) {
          acc[date] = { date, lateTime: 0, overtime: 0, earlyCheckOut: 0 };
        }
        acc[date].lateTime += parseFloat(curr.lateTime);
        acc[date].overtime += parseFloat(curr.overTime);
        acc[date].earlyCheckOut += parseFloat(curr.earlyOutTime);
        return acc;
      }, {});
    };
  const chartData = Object.values(aggregateData(data));

  const [users, setUsers] = useState(initialUsers);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const editUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  
  const [isExpanded, setExpanded] = useState(true);
 
  return (
    <div className="flex">
      <AdminSidebar expanded={isExpanded} >
        < AdminNavSide/>
      </AdminSidebar>
      <div className={`flex-1 ${isExpanded ? 'ml-64' : 'ml-16'} transition-all duration-300`} style={{ height: "100vh", backgroundColor: "#f3f4f6" }}>
        <AdminNavbar setExpanded={setExpanded} onUserName={handleUserName}/>
        <main className="p-4 bg-gray-100 mt-10">
          <Routes>
            {/* <Route path="/login"  element={<Login/>} /> */}
            <Route path="/adminDashboard" element={<AdminDashboard userName={userName} />} />
              <Route path="/attendances" element={<Attendances data={data}/>} />
              <Route path="/analytics" element={<Analytics data={chartData} originalData={data} />} />
              <Route path="/users" element={<UsersList  users={users} deleteUser={deleteUser} />} />
              <Route path="/add" users={users} addUser={addUser} editUser={editUser}  />
              <Route path="/add_update" element={<ADD_Update_Users users={users} addUser={addUser} editUser={editUser}/>} />
              <Route path="/add/:id" element={<ADD_Update_Users users={users} addUser={addUser} editUser={editUser}/>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/importcsv" element={<ImportCSV/>} />
              <Route path="/areaList" element={<AreasList/>} />
              <Route path="/areaEdit" element={<EditAreas />} />
              <Route path="/shiftList" element={<ShiftsList/>} />
              <Route path="/shiftEdit" element={<EditShifts />} />
              <Route path="/events" element={<Events />} />
              <Route path="/settings" element={<Settings />} />
              {/*
              <Route path="/logout" element={<LogOut />} />  */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default SuperAdminRoute;