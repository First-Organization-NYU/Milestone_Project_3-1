function Login() {
    return (
        <div>
            <div className="loginPage">
                <h1>Login</h1>
            </div>
            <div className="loginform">
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" /><br /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" /><br /><br />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

