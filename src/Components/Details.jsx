import React from 'react';
import './details.css'; 

function Details() {
  const usrimg = '/userimage.png';
 

  const handleEdit = () => {
    console.log('Edit button clicked');
    
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
  
  };

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-image">
          <img src={usrimg} alt="Employee" />
        </div>
        <div className="details-info">
          <h2>Name</h2>
          <h4>Designation</h4>
        </div>
        <div className="details-actions">
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
