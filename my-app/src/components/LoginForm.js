import {useState, useEffect, useRef,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CurrentUser } from "/Users/neilgardner/Milestone_Project_3/my-app/src/context/CurrentUser.js" 
import './StyleForm.css'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//https://regex101.com to test and explain pattern
/* eslint-disable-next-line */
const EMAIL_REGEX = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;//eslint:Unnecessary escape character: \/. use:/* eslint-disable-next-line */ to disable rule warning.
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function LoginForm() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

    const [errMsg, setErrMsg] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null)



    const userRef = useRef();
	const errRef = useRef();

    useEffect(() => {
		userRef.current.focus();
	}, [])

    useEffect(() => {
		const result = EMAIL_REGEX.test(credentials.email);
		console.log(result);
		console.log(credentials.email);
		setValidEmail(result)
		// setValidEmail(EMAIL_REGEX.test(credentials.email));
	}, [credentials.email])

    useEffect(() => {
		const result = PWD_REGEX.test(credentials.password);
		console.log(result);
		console.log(credentials.password);
		setValidPassword(result);
		// setValidPassword(PWD.test(password));
	}, [credentials.password])

    useEffect(() => {
        setErrMsg('');
    }, [credentials.email, credentials.password])




    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/authentication", {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            console.log(data.token)
            navigate.push(`/`)
        } else {
            setErrorMessage(data.message)
        }
        

    const input1 = EMAIL_REGEX.test(credentials.email);
	const input2 = PWD_REGEX.test(credentials.password);
	
	
	if (!input1 || !input2  ) {
		setErrMsg("Please enter the correct value(s) in your Login form");
		return;
	}

    }


    return (
        <main>
        <><h1>Barking Boutique</h1></>
            
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
                <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email
                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validEmail || !credentials.email ? "hide" : "invalid"} />
				</label>
				<input
					type="text"
					required
					value={credentials.email}
					onChange={e => setCredentials({ ...credentials, email: e.target.value })}
					className="form-control"
					id="email"
					name="email"
                    ref={userRef}//useRef is assigned ref attribute of the input field.
					onFocus={() => setEmailFocus(true)}
					onBlur={() => setEmailFocus(false)} 
					/>
				<p id="confirmnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
					<FontAwesomeIcon icon={faInfoCircle} />
					Must match the first password input field.Uppercase (A-Z) and lowercase (a-z) Digits (0-9).
					Characters ! # $ % & ' * + - / = ? ^ _ ` {`|`} ~
					Character . ( period) not the first or last character & will not come one after the other.
				</p>

                   
                    <label htmlFor="password">
                        Password
                        <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPassword || !credentials.password ? "hide" : "invalid"} />
                    </label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                            // ref={userRef}
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                    
                    <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: ! @ # $ %
                    </p>
               
                <input className="btn btn-primary" type="submit" value="Login" autoFocus/>
            </form>
            </section>
        </main>
    )
}

export default LoginForm