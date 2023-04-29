import { Link } from "react-router-dom"
function Payment() {
    //Delete Cart Data
    return (
        <div className="paymentPage">
            <h1>Checkout</h1>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" /><br /><br />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" /><br /><br />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" /><br /><br />
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" /><br /><br />
            <label htmlFor="cardNum">Card Number:</label>
            <input type="text" id="cardNum" name="cardNum" /><br /><br />
            <label htmlFor="date">Expiration Date:</label>
            <input type="text" id="date" name="date" /><br /><br />
            <label htmlFor="securityCode">First Name:</label>
            <input type="text" id="securityCode" name="securityCode" /><br /><br />
            <button className="confirm-btn"><Link to="/confirmation">Place Order</Link></button>
        </div>
    )
}

export default Payment