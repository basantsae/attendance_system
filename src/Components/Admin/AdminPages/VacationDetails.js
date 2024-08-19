import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

  const VacationDetails = ({ vacations, updateVacationStatus }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vacation = vacations.find((v) => v.id === parseInt(id));

  const [status, setStatus] = useState(vacation.status);

  
  if (!vacation) {
    return <p>Vacation not found</p>;
  }


  const handleApprove = () => {
    setStatus('Approved');
    updateVacationStatus(vacation.id, 'Approved');
  };

  const handleReject = () => {
    setStatus('Rejected');
    updateVacationStatus(vacation.id, 'Rejected');
  };

  const handleBack = () => {
    navigate('/admin/vacation');
  };

  return (
    <div>
      <h1>Vacation Details</h1>
      <p><strong>Name:</strong> {vacation.name}</p>
      <p><strong>Type:</strong> {vacation.type}</p>
      <p><strong>From Date:</strong> {vacation.fromDate}</p>
      <p><strong>To Date:</strong> {vacation.toDate}</p>
      <p><strong>Status:</strong> {status}</p>
      <button onClick={handleApprove}>Approve</button>
      <button onClick={handleReject}>Reject</button>
      <button onClick={handleBack}>Back to List</button>
    </div>
  );
};

export default VacationDetails;
