// import './index.css';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Login from './SuperAdmin/StaticComponent/Login';
// import Sidebar from './SuperAdmin/StaticComponent/Sidebar';
// import Navbar from './SuperAdmin/StaticComponent/Navbar';
// import Dashboard from './SuperAdmin/Pages/Dashboard';
// import ItemSidebar from './SuperAdmin/StaticComponent/ItemSidebar';
// import Profile from './SuperAdmin/Pages/Profile';
// import AddSubscriber from './SuperAdmin/Pages/AddSubscriber';
// import SubscriberList from './SuperAdmin/Pages/SubscriberList';
// import AddPlans from './SuperAdmin/Pages/AddPlans';
// import PlansList from './SuperAdmin/Pages/PlansList';
// import { initialPlans, initialSubscriber } from "./SuperAdmin/Services/SubscriberData";


// function App() {
//   const [isExpanded, setExpanded] = useState(true);

//   const [subscribers, setSubscribers] = useState(initialSubscriber);
//   const addSubscriber = (subscriber) => {
//     subscriber.id = subscribers.length + 1;
//     setSubscribers([...subscribers, subscriber]);
//   };
//   const editSubscriber = (updatedSubscriber) => {
//     setSubscribers(subscribers.map((subscriber) =>
//       subscriber.id === updatedSubscriber.id ? updatedSubscriber : subscriber
//     ));
//   };
//   const deleteSubscriber = (id) => {
//     setSubscribers(subscribers.filter((subscriber) => subscriber.id !== id));
//   };


//   const [plans, setPlans] = useState(initialPlans);

//   const addPlan = (plan) => {
//     plan.id = plans.length + 1;
//     setPlans([...plans, plan]);
//   };
//   const editPlan = (updatedPlan) => {
//     setPlans(plans.map((plan) =>
//       plan.id === updatedPlan.id ? updatedPlan : plan
//     ));
//   };
//   const deletePlan = (id) => {
//     setPlans(plans.filter((plan) =>plan.id !== id));
//   };

//   return (
//   <>
//     <Router>
//       <Routes>
//       {/* <Route path="/login" element={<Login />} /> */}
//       </Routes>
//       <div className="flex">
//       <Sidebar expanded={isExpanded}>
//         <ItemSidebar/>
//       </Sidebar>
//       <div className={`flex-1 ${isExpanded ? 'ml-64' : 'ml-16'} transition-all duration-300`} style={{height: "100vh",
//             backgroundColor: "#f3f4f6"}}>
//           <Navbar setExpanded={setExpanded} />
//             <main className="p-4 bg-gray-100 mt-10">
//               <Routes>
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route path="/profile" element={<Profile />} />
//                   <Route path="/subscriber-list" element={<SubscriberList subscribers={subscribers} deleteSubscriber={deleteSubscriber} />} />
//                   <Route path="/add-subscriber" element={<AddSubscriber subscribers={subscribers} addSubscriber={addSubscriber} editSubscriber={editSubscriber} />} />
//                   <Route path="/edit-subscriber/:id" element={<AddSubscriber subscribers={subscribers} addSubscriber={addSubscriber} editSubscriber={editSubscriber} />} />
//                   <Route path="/add-plans" element={<AddPlans plans={plans} addPlan={addPlan} editPlan={editPlan}/>} />
//                   <Route path="/edit-plans/:id" element={<AddPlans plans={plans} addPlan={addPlan} editPlan={editPlan}/>} />
//                   <Route path="/plans-list" element={<PlansList plans={plans} deletePlan={deletePlan} />} />
//               </Routes>
//             </main>
//         </div>
//       </div>
//       </Router>

//   </>
//   );
// }

// export default App;


                
    
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/LoginPages/Login';
import SuperAdminRoute from './Components/Routes/SuperAdminRoute';
import AdminRoute from './Components/Routes/AdminRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/superadmin/*" element={<SuperAdminRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
