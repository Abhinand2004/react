import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css';

const Data = () => {
  const [data, setData] = useState([]);
  
  const fetchdata = async () => {
    try {
      const res = await axios.get("./data.json");
      if (res.status === 200) {
        setData(res.data.products);
      } else {
        alert("error");
      }
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
    
      <div className="container">
        <div className="left">
          <h2>Courses</h2>
          
         {
            data.map((data,index)=>(
                <ul key={index}>
                    <li>{data.course}</li>
                </ul>
            ))
         }
        </div>
        <div className="right">
          {data.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.course}</h3>
              <p>${item.fees}</p>
              <p>{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Data;
