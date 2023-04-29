import { useState } from 'react';
// Fetch User table data
// 
function Login() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoggedIn(true);
    }

    return (
        <div>
            <div className="loginPage">
                <h1>Login</h1>
            </div>
            <div className="loginform">
                {loggedIn ? (
                    <p>Welcome!</p>
                    // <p>Welcome {users.firstName} {users.lastName}!</p>
                ) : (
                    <form>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" required /><br /><br />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required /><br /><br />
                        <button className="login-btn2" onClick={handleLogin}>Login</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Login;