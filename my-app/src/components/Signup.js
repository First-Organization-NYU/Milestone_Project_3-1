import { useState } from 'react';

function Signup() {
    const [signedUp, setSignedUp] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Welcome"); // or display a message to the user
        setSignedUp(true);
    }
    
    return (
        <div>
            <div className="signupPage">
                <h1>Signup</h1>
            </div>
            <div className="signupform">
                {signedUp ? (
                    <p>Welcome!</p>
                ) : (
                    <form onSubmit={handleSignup}>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" required /><br /><br />
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" required /><br /><br />
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" required /><br /><br />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required /><br /><br />
                        <button className="signup-btn" type="submit">Sign Up</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Signup;
