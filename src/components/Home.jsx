import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "./ThemeContext";
import "./Home.css";

const Home = () => {
  const { theme } = useTheme();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("./data/data.json")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const selectData = (course) => {
    if (course === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.course === course));
    }
  };

  const uniqueCourses = [...new Set(data.map(item => item.course))];

  return (
    <div
      className={`App `}
      style={{
        backgroundColor: theme === "light" ? "#f0f0f0" : "#2c2c2c",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div className="leftside">
        <h3>Courses</h3>
        <ul>
          <li onClick={() => selectData("all")}>All</li>
          {uniqueCourses.map((course, index) => (
            <li key={index} onClick={() => selectData(course)}>
              {course}
            </li>
          ))}
        </ul>
      </div>
      <div className="rightside">
        {filteredData.map((item, index) => (
          <div key={index} className="cards">
            <div>{item.course}</div>
            <div>{item.duration}</div>
            <div>{item.fees}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
