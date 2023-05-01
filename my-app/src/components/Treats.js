import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


function Treats() {
  //fetch data from dog_treats table & display it 
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3002/treats");
      setData(result.data)
    }
    fetchData()
  }, [])

  return (
    <div className="treatsPage">
      <h1>Shop For Dog Treats</h1>
      <div className="treatContent">
        {data.map((dog_treats) => (
          <div className="treatDisplay" key={dog_treats.barcode}>
            <h3><u>{dog_treats.name}</u></h3>
            <h4>{dog_treats.brand}</h4>
            <img src={dog_treats.image} alt="Dog Treats"></img>
            <h5>Price: ${dog_treats.price}</h5>
            <h6>Product Weight: {dog_treats.weight}</h6>
            <button className="add-btn">Add</button>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Treats;