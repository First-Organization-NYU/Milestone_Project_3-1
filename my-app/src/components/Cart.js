import { Link } from "react-router-dom"
function Cart() {
    //retrive data when add button is clicked 
    return (
        <div className="cartPage">
            <h1>Shopping Cart</h1>
            {data.map((dog_toys) => (
        <div className="cartDisplay" key={cart.barcode}>
          <ul>
            <li>{cart.image}</li>
            <li>{cart.name}</li>
            <li>{cart.price}</li>
            </ul>
        </div>
      ))}
            <button className="cart-btn"><Link to="/payment">Proceed to Checkout</Link></button>
        </div>
    )
}

export default Cart