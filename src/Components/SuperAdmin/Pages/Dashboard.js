// import React from "react";

// function Dashboard(){
//   return(
//     <>
//         <main className="p-4">
//           <h2 className="text-2xl">Main Dashboard</h2>
//           {/* Add your main content here */}
//         </main>    
          
//     </>
//   )
// }

// export default Dashboard;

import React, { useState } from 'react';
import SuperAdminRoute from '../../Routes/SuperAdminRoute';

// const initialSubscriber = []; // Replace with actual initial data if available
// const initialPlans = []; // Replace with actual initial data if available

function Dashboard() {
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
//     setPlans(plans.filter((plan) => plan.id !== id));
//   };

  return (
    // <SuperAdminRoute
    //   isExpanded={isExpanded}
    //   setExpanded={setExpanded}
    //   subscribers={subscribers}
    //   addSubscriber={addSubscriber}
    //   editSubscriber={editSubscriber}
    //   deleteSubscriber={deleteSubscriber}
    //   plans={plans}
    //   addPlan={addPlan}
    //   editPlan={editPlan}
    //   deletePlan={deletePlan}
    // />
<div className="content p-4">
<div className="content-header">
    <h1>hello dashboard</h1>

    </div>
    </div>
  );
}

export default Dashboard;
