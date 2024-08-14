import React from 'react';
import { Link } from 'react-router-dom';

function MeetingList({ meetings, deleteMeeting }) {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this meeting?')) {
      deleteMeeting(id);
    }
  };

  return (
    <div className="content p-4">
      <div className="content-header">
        <h1>Meetings</h1>
      </div>

      <div className="attendance-content">
        <div className="attendance-title">
          <h1>Meeting List</h1>
        </div>
        <hr />
        <div className="attendance-table" id="table-section">
          <table className="meetings-table" border="1" style={{ width: '100%', marginTop: '20px' }}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Meeting Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Place</th>
                <th>Audience</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {meetings.length > 0 ? (
                meetings.map((meeting, index) => (
                  <tr key={meeting.id}>
                    <td>{index + 1}</td>
                    <td>{meeting.meetingTitle}</td>
                    <td>{meeting.meetingDate}</td>
                    <td>{meeting.meetingTime}</td>
                    <td>{meeting.meetingPlace}</td>
                    <td>{meeting.audience}</td>
                    <td>
                      {meeting.status === 'established' ? 'Established' : 'Delay'}
                    </td>
                    <td>
                      <div className="action-buttons">
                        <Link to={`/admin/editmeeting/${meeting.id}`} className="action-btn edit-btn">
                            <i className="fa fa-edit"></i> Edit
                        </Link>
                        <button onClick={() => handleDelete(meeting.id)} className="action-btn delete-btn">
                            <i className="fa fa-trash"></i> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center' }}>No meetings found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MeetingList;
