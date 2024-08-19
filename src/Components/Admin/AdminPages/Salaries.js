// function Salaries ({salaries}){
    

// //   useEffect(() => {
// //     // Replace with your API endpoint
// //     fetch('https://example.com/api/Salaries')
// //       .then(response => response.json())
// //       .then(data => {
// //         setVacations(data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching data:', error);
// //         setLoading(false);
// //       });
// //   }, []);

//   return (
//     <div className="content p-4">
//       <div className="content-header">
//         <h1>Salaries</h1>
//       </div>
//       <div className="attendance-content">
//         <div className="attendance-title">
//           <h1>List</h1>
//         </div>
//         <hr />
//     <div className="attendance-table">
//         <table border="1" style={{ width: '100%', marginTop: '20px' }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Month</th>
//             <th>Year</th>
//             <th>Basic salary</th>
//             <th>Bonus</th>
//             <th>Increase</th>
//             <th>Discounts</th>
//             <th>Net salary</th>
//             <th>Status</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//         {salaries.length === 0 ? (
//             <tr>
//               <td colSpan="6">No data available</td>
//             </tr>
//           ) : (
//             salaries.map((salary) => (
//               <tr key={salary.id}>
//                 <td>{salary.name}</td>
//                 <td>{salary.month}</td>
//                 <td>{salary.year}</td>
//                 <td>{salary.basicSalary}</td>
//                 <td>{salary.bonus}</td>
//                 <td>{salary.increase}</td>
//                 <td>{salary.discounts}</td>
//                 <td>{salary.netSalary}</td>
//                 <td>{salary.status}</td>
//                 <td>
//                   <a href={`/admin/salaries/${salary.id}`}>View More</a>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//       </div>
//     </div>
//     </div>

//   );
// }

// export default Salaries;


// import React from 'react';
// import { Link } from 'react-router-dom';

// function Salaries({ salaries }) {
//   return (
//     <div className="content p-4">
//       <div className="content-header">
//         <h1>Salaries</h1>
//       </div>
//       <div className="attendance-content">
//         <div className="attendance-title">
//           <h1>List</h1>
//         </div>
//         <hr />
//         <div className="attendance-table">
//           <table border="1" style={{ width: '100%', marginTop: '20px' }}>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Month</th>
//                 <th>Year</th>
//                 <th>Basic Salary</th>
//                 <th>Bonus</th>
//                 <th>Increase</th>
//                 <th>Discounts</th>
//                 <th>Net Salary</th>
//                 <th>Status</th>
//                 <th>Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {salaries.length === 0 ? (
//                 <tr>
//                   <td colSpan="10">No data available</td>
//                 </tr>
//               ) : (
//                 salaries.map((salary) => (
//                   <tr key={salary.id}>
//                     <td>{salary.name}</td>
//                     <td>{salary.month}</td>
//                     <td>{salary.year}</td>
//                     <td>{salary.basicSalary}</td>
//                     <td>{salary.bonus}</td>
//                     <td>{salary.increase}</td>
//                     <td>{salary.discounts}</td>
//                     <td>{salary.netSalary}</td>
//                     <td>{salary.status}</td>
//                     <td>
//                       <Link to={`/admin/salaries/${salary.id}`}>View More</Link>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Salaries;





import React from 'react';
import { Link } from 'react-router-dom';

function Salaries({ salaries }) {
  return (
    <div className="content p-4">
      <div className="content-header">
        <h1>Salaries</h1>
      </div>
      <div className="attendance-content">
        <div className="attendance-title">
          <h1>List</h1>
        </div>
        <hr />
        <div className="attendance-table">
          <table border="1" style={{ width: '100%', marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Month</th>
                <th>Year</th>
                <th>Basic Salary</th>
                <th>Bonus</th>
                <th>Increase</th>
                <th>Discounts</th>
                <th>Net Salary</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {salaries.length === 0 ? (
                <tr>
                  <td colSpan="10">No data available</td>
                </tr>
              ) : (
                salaries.map((salary) => (
                  <tr key={`${salary.id}-${salary.month}-${salary.year}`}>
                    <td>{salary.name}</td>
                    <td>{salary.month}</td>
                    <td>{salary.year}</td>
                    <td>{salary.basicSalary}</td>
                    <td>{salary.bonus}</td>
                    <td>{salary.increase}</td>
                    <td>{salary.discounts}</td>
                    <td>{salary.netSalary}</td>
                    <td>{salary.status}</td>
                    <td>
                      <Link to={`/admin/salaries/${salary.employeeId}`}>View More</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Salaries;
