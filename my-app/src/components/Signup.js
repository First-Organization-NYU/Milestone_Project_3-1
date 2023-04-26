function Signup() {
    return (
        <div>
            <div className="signUpPage">
                <h1>Login</h1>
            </div>
            <div className="signUpform">
                <form>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" /><br /><br />
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" /><br /><br />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" /><br /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" /><br /><br />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup