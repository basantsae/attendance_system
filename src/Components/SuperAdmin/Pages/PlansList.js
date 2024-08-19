import React from 'react';
import { Link } from 'react-router-dom';

function PlansList({ plans, deletePlan }) {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this plan?')) {
      deletePlan(id);
    }
  };

  return (
    <div className="content p-4">
      <div className="content-header">
        <h1>Plans</h1>
      </div>

      <div className="attendance-content">
        <div className="attendance-title">
          <h1>Plan List</h1>
        </div>
        <hr />
        <div className="attendance-table" id="table-section">
          <table className="plans-table" border="1" style={{ width: '100%', marginTop: '20px' }}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Plan Name</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Number of Employees</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {plans.length > 0 ? (
                plans.map((plan, index) => (
                  <tr key={plan.id}>
                    <td>{index + 1}</td>
                    <td>{plan.planName}</td>
                    <td>{plan.planDuration.charAt(0).toUpperCase() + plan.planDuration.slice(1)}</td>
                    <td>{plan.price}</td>
                    <td>{plan.numberOfEmployees}</td>
                    <td>
                      <div className="action-buttons">
                        <Link to={`/superadmin/edit-plans/${plan.id}`} className="action-btn edit-btn">
                            <i className="fa fa-edit"></i> Edit
                        </Link>
                        <button onClick={() => handleDelete(plan.id)} className="action-btn delete-btn">
                            <i className="fa fa-trash"></i> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center' }}>No plans found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlansList;
