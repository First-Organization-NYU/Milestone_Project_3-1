import { Link } from "react-router-dom"
function Cart() {
    return (
        <div className="cartPage">
            <h1>Shopping Cart</h1>
            <button><Link to="/payment">Proceed to Checkout</Link></button>
        </div>
    )
}

export default Cart