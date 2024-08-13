import React ,{useState} from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../SuperAdmin/StaticComponent/Sidebar';
import ItemSidebar from '../SuperAdmin/StaticComponent/ItemSidebar'
import Navbar from '../SuperAdmin/StaticComponent/Navbar';
import Dashboard from '../SuperAdmin/Pages/Dashboard';
import Profile from '../SuperAdmin/Pages/Profile';
import SubscriberList from '../SuperAdmin/Pages/SubscriberList';
import AddSubscriber from '../SuperAdmin/Pages/AddSubscriber';
import AddPlans from '../SuperAdmin/Pages/AddPlans';
import PlansList from '../SuperAdmin/Pages/PlansList';

function SuperAdminRoute() {
  const initialSubscriber = []; // Replace with actual initial data if available
const initialPlans = []; // Replace with actual initial data if available

  const [isExpanded, setExpanded] = useState(true);

  const [subscribers, setSubscribers] = useState(initialSubscriber);
  const addSubscriber = (subscriber) => {
    subscriber.id = subscribers.length + 1;
    setSubscribers([...subscribers, subscriber]);
  };
  const editSubscriber = (updatedSubscriber) => {
    setSubscribers(subscribers.map((subscriber) =>
      subscriber.id === updatedSubscriber.id ? updatedSubscriber : subscriber
    ));
  };
  const deleteSubscriber = (id) => {
    setSubscribers(subscribers.filter((subscriber) => subscriber.id !== id));
  };

  const [plans, setPlans] = useState(initialPlans);
  const addPlan = (plan) => {
    plan.id = plans.length + 1;
    setPlans([...plans, plan]);
  };
  const editPlan = (updatedPlan) => {
    setPlans(plans.map((plan) =>
      plan.id === updatedPlan.id ? updatedPlan : plan
    ));
  };
  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };
  return (
    <div className="flex">
      <Sidebar expanded={isExpanded}>
        <ItemSidebar />
      </Sidebar>
      <div className={`flex-1 ${isExpanded ? 'ml-64' : 'ml-16'} transition-all duration-300`} style={{ height: "100vh", backgroundColor: "#f3f4f6" }}>
        <Navbar setExpanded={setExpanded} />
        <main className="p-4 bg-gray-100 mt-10">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route 
              path="/subscriber-list" 
              element={<SubscriberList subscribers={subscribers} deleteSubscriber={deleteSubscriber} />} 
            />
            <Route 
              path="/add-subscriber" 
              element={<AddSubscriber addSubscriber={addSubscriber} editSubscriber={editSubscriber} />} 
            />
            <Route 
              path="/edit-subscriber/:id" 
              element={<AddSubscriber subscribers={subscribers} editSubscriber={editSubscriber} />} 
            />
            <Route 
              path="/add-plans" 
              element={<AddPlans plans={plans} addPlan={addPlan} editPlan={editPlan}/>} 
            />
            <Route 
              path="/edit-plans/:id" 
              element={<AddPlans plans={plans} addPlan={addPlan} editPlan={editPlan}/>} 
            />
            <Route 
              path="/plans-list" 
              element={<PlansList plans={plans} deletePlan={deletePlan} />} 
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default SuperAdminRoute;