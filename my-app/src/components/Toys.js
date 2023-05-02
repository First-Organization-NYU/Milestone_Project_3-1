import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


function Toys() {
  //fetch data from dog_toys table & display it
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3002/toys");
      setData(result.data)
    }
    fetchData()
  },[])
  
  return (
   
    <div className="toysPage">
      <h1>Shop For Dog Toys</h1>
      <div className="toyContent">
        {data.map((toys) => {
          return (
            <div className="toyDisplay" key={toys.barcode}>
              <div>
                <h3><u>{toys.name}</u></h3>
                <h4>{toys.brand}</h4>
                <img src={toys.image} alt="Dog Treats"></img>
                <h5>Price: ${toys.price}</h5>
              </div>
              <div>
                <button id='addToCart' className='addToCartButton' >Add to Cart</button>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  );
}

export default Toys;



// {data.map((dog_toys) => (
//   <div className="productDisplay" key={dog_toys.barcode}>
//     <h3>{dog_toys.name}</h3>
//     <h4>{dog_toys.brand}</h4>
//     <img src={dog_toys.image} alt="Dog toy"></img>
//     <h5>{dog_toys.price}</h5>
//     <button className="add-btn">Add</button>
//     <br></br>
//   </div>
// ))}