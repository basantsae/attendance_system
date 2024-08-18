import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Vacations = ({vacations}) => {


//   useEffect(() => {
//     // Replace with your API endpoint
//     fetch('https://example.com/api/vacations')
//       .then(response => response.json())
//       .then(data => {
//         setVacations(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

  return (
    <div className="content p-4">
      <div className="content-header">
        <h1>Vacations</h1>
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
            <th>Type</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
        {vacations.length === 0 ? (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          ) : (
            vacations.map((vacation) => (
              <tr key={vacation.id}>
                <td>{vacation.name}</td>
                <td>{vacation.type}</td>
                <td>{vacation.fromDate}</td>
                <td>{vacation.toDate}</td>
                <td>{vacation.status}</td>
                <td>
                  <a href={`/admin/vacation/${vacation.id}`}>View More</a>
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
};

export default Vacations;
