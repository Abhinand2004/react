import React, { useState } from 'react';
import './Add.css';

function Add() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [desig, setDesig] = useState('');

  const display = (e) => {
    e.preventDefault();
    console.log(image);
    console.log(name);
    console.log(desig);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  return (
    <div className="add-container">
      <div className="add-card">
        <form>
          <div className="add-imagedisplay"></div>
          <input type="file" name="photo" onChange={handleImageChange} className="add-file-input"/>
          <input  type="text" placeholder="Name"onChange={(e) => setName(e.target.value)}   className="add-textinput" />
          <input type="text" placeholder="Designation" onChange={(e) => setDesig(e.target.value)} className="add-textinput" />
          <button onClick={display} className="add-button">
           
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
