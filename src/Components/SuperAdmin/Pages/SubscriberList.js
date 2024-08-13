import React from 'react';
import { Link } from 'react-router-dom';


function SubscriberList({ subscribers, deleteSubscriber }) {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this subscriber?')) {
      deleteSubscriber(id);
    }
  };

  return (
    <div className="content p-4">
      <div className="content-header">
        <h1>Subscribers</h1>
      </div>

      <div className="attendance-content">
        <div className="attendance-title">
          <h1>Subscriber List</h1>
        </div>
        <hr />
        <div className="attendance-table" id="table-section">
      <table className="subscriber-table" border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.length > 0 ? (
            subscribers.map((subscriber ,index) => (
              <tr key={subscriber.id}>
                <td>{index + 1}</td>
                <td>
                  <img style={{borderRadius:"50%"}} src={subscriber.image || 'https://afl.muliatech.web.id/img/default-user.png'} alt={subscriber.name} className="subscriber-image" width="50px" />
                </td>
                <td>{subscriber.name}</td>
                <td>{subscriber.email}</td>
                <td>{subscriber.phone}</td>
                <td>
                  {/* <Link to={`/edit-subscriber/${subscriber.id}`} className="edit-btn">
                    <i className="fa fa-edit"></i> 
                  </Link>

                  <button onClick={() => handleDelete(subscriber.id)} className="delete-btn">
                    <i className="fa fa-trash"></i> 
                  </button> */}
                  <div className="action-buttons">
                  <Link to={`/superadmin/edit-subscriber/${subscriber.id}`} className="action-btn edit-btn">
                    <i className="fa fa-edit"></i> Edit
                  </Link>

                  <button onClick={() => handleDelete(subscriber.id)} className="action-btn delete-btn">
                    <i className="fa fa-trash"></i> Delete
                  </button>
                </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>No subscribers found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
}

export default SubscriberList;
