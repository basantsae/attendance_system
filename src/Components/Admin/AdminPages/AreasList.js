import React from 'react';

const AreasList = () => {
  const savedArea = JSON.parse(localStorage.getItem('savedArea'));

  return (
    <div>
      <h2>Saved Areas</h2>
      {savedArea ? (
        <table>
          <thead>
            <tr>
              <th>Area Name</th>
              <th>Full Address</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{savedArea.name}</td>
              <td>{savedArea.fullAddress}</td>
              <td>{new Date(savedArea.createdAt).toLocaleString()}</td>
              <td>{new Date(savedArea.updatedAt).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No areas saved yet.</p>
      )}
    </div>
  );
};

export default AreasList;
