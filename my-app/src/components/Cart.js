import { Link } from "react-router-dom"
import React, {useState, useEffect} from "react";
import axios from "axios";
// import constate from "constate";

function Cart() {

    const [data, setData] = useState([]);

    useEffect(()=> {
        const fetchData = async()=>{
            const result = await axios("http://localhost:3002/cart");
            setData(result.data)
        };
        fetchData();
    }, []);

    const handleDelete = async(cartItem_id) => {
        try{
            const response = await axios.delete(`http://localhost:3002/cart/${cartItem_id}`)
        }catch(error){
            console.log(`Error Message is: ${error}`)
        }
    }

    //retrive data when add button is clicked 
    return (
        <div className="cartPage">
            <div className="carPageTitle">
                <h1>Shopping Cart</h1>
            </div>
            <div className="CartPageContent">
                <div className='cartDisplay'>
                    <h3>Item 1: </h3>
                    <button onClick={()=>handleDelete()}>Delete</button>
                </div>
            </div>
            

            {/* {data.map((cartItems) => (
        <div className="cartDisplay" key={cart.barcode}>
          <ul>
            <li>{cart.image}</li>
            <li>{cart.name}</li>
            <li>{cart.price}</li>
            </ul>
        </div>
      )
      )} */}
            <button className="cart-btn"><Link to="/payment">Proceed to Checkout</Link></button>
</div>)
}

export default Cart;