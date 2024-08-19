// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function SalaryDetails({salaries, updateSalariesStatus }) {
// //   const { id } = useParams(); // Get the user ID from the URL
// //   const [salaries, setSalaries] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Fetch all salary records for the user by their ID
// //     fetch(`https://example.com/api/Salaries?userId=${id}`)
// //       .then(response => response.json())
// //       .then(data => {
// //         setSalaries(data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching salary details:', error);
// //         setLoading(false);
// //       });
// //   }, [id]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (salaries.length === 0) {
// //     return <div>No salary details found for this user.</div>;
// //   }

//     return (
//         <div className="content p-4">
//         <div className="content-header">
//             <h1>Salary Details</h1>
//         </div>
//         <div className="attendance-content">
//             <div className="attendance-title">
//             <h2>{salaries[0].name}</h2>
//             </div>
//             <hr />
//             <div>
//             {salaries.map((salary) => (
//                 <div key={`${salary.month}-${salary.year}`}>
//                 <h3>{`Month: ${salary.month}, Year: ${salary.year}`}</h3>
//                 <p><strong>Basic Salary:</strong> {salary.basicSalary}</p>
//                 <p><strong>Bonus:</strong> {salary.bonus}</p>
//                 <p><strong>Increase:</strong> {salary.increase}</p>
//                 <p><strong>Discounts:</strong> {salary.discounts}</p>
//                 <p><strong>Net Salary:</strong> {salary.netSalary}</p>
//                 <p><strong>Status:</strong> {salary.status}</p>
//                 <p><strong>Payment Date:</strong> {salary.paymentDate}</p>
//                 <hr />
//                 </div>
//             ))}
//             </div>
//         </div>
//         </div>
//     );
// }

// export default SalaryDetails;



// import React from 'react';
// import { useParams } from 'react-router-dom';

// function SalaryDetails({ salaries }) {
//   const { id } = useParams(); // Get the salary ID from the URL
//   const salary = salaries.find((salary) => salary.id === parseInt(id));

//   if (!salary) {
//     return <div>No salary details found for this user.</div>;
//   }

//   return (
//     <div className="content p-4">
//       <div className="content-header">
//         <h1>Salary Details</h1>
//       </div>
//       <div className="attendance-content">
//         <div className="attendance-title">
//           <h2>{salary.name}</h2>
//         </div>
//         <hr />
//         <div>
//           <h3>Month: {salary.month}, Year: {salary.year}</h3>
//           <p><strong>Basic Salary:</strong> {salary.basicSalary}</p>
//           <p><strong>Bonus:</strong> {salary.bonus}</p>
//           <p><strong>Increase:</strong> {salary.increase}</p>
//           <p><strong>Discounts:</strong> {salary.discounts}</p>
//           <p><strong>Net Salary:</strong> {salary.netSalary}</p>
//           <p><strong>Status:</strong> {salary.status}</p>
//           <hr />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SalaryDetails;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function SalaryDetails({ salaries, onStatusChange }) {
  const { employeeId } = useParams(); // Get the employee ID from the URL
  const [employeeSalaries, setEmployeeSalaries] = useState(
    salaries.filter((salary) => salary.employeeId === parseInt(employeeId))
  );

  const handleStatusChange = (id) => {
    // Call the status change handler passed via props
    onStatusChange(id);
  };

  if (employeeSalaries.length === 0) {
    return <div>No salary details found for this employee.</div>;
  }

  return (
    <div className="content p-4">
      <div className="content-header">
        <h1>Salary Details for {employeeSalaries[0].name}</h1>
      </div>
      <div className="salary-details-content">
        {employeeSalaries.map((salary) => (
          <div key={`${salary.month}-${salary.year}`} className="salary-period">
            <div className="period-header">
              <h2>Period: {salary.month} {salary.year}</h2>
            </div>
            <div className="period-details">
              <p><strong>Basic Salary:</strong> {salary.basicSalary}</p>
              <p><strong>Bonus:</strong> {salary.bonus}</p>
              <p><strong>Increase:</strong> {salary.increase}</p>
              <p><strong>Discounts:</strong> {salary.discounts}</p>
              <p><strong>Net Salary:</strong> {salary.netSalary}</p>
              <p><strong>Status:</strong> {salary.status}</p>
              {salary.status === 'Unpaid' && (
                <button onClick={() => handleStatusChange(salary.id)}>Mark as Paid</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalaryDetails;
