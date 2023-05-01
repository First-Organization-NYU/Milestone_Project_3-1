import {useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
// import { CurrentUser } from "../contexts/CurrentUser"
import './StyleForm.css'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//https://regex101.com to test and explain pattern
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{7,29}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function LoginForm() {

    const navigate = useNavigate()

    // const { setCurrentUser } = useContext(CurrentUser)

    // const [credentials, setCredentials] = useState({

    //     username: '',
    //     password: ''
    // })

    const [userName, setUserName] = useState('');
	const [validUserName, setValidUserName] = useState(false);
    const [userNameFocus, setUserNameFocus] = useState(false);

    const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);
    // const [errMsg, setErrMsg] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null)

    const userRef = useRef();
	// const errRef = useRef();

    useEffect(() => {
		userRef.current.focus();
	}, [])

    useEffect(() => {
		const result = USERNAME_REGEX.test(userName);
		console.log(result);
		console.log(userName);
		setValidUserName(result)
		// setValidUserName(USERNAME_REGEX.test(user)); 
	}, [userName])	

    useEffect(() => {
		const result = PWD_REGEX.test(password);
		console.log(result);
		console.log(password);
		setValidPassword(result);
		// setValidPassword(PWD.test(password));
	}, [password])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [userName, password])




    async function handleSubmit(e) {
        // e.preventDefault()

    
	// const input1 = USERNAME_REGEX.test(userName);
	// const input2 = PWD_REGEX.test(password);
	
	
	// if (!input1 || !input2  ) {
	// 	setErrMsg("Please enter the correct value(s) in your Login form");
	// 	return;
	// }
	

    


        const response = await fetch(`/authentication`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userName, password)
        })

        const data = await response.json()
        // console.log(data)

        if (response.status === 200) {
            // setCurrentUser(useName,password)
            console.log(response.user, "login was sucessfull") //print username coming from controller/user: res.json(user) line 13. 
            navigate.push(`/`)
        } else {
            setErrorMessage(data.message)
        }

    }


    return (
        <main>
        <p><h1>DOGGY CUTURE PET STORE</h1></p>
            
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                    <label htmlFor="userName">
                        Username:
                        <FontAwesomeIcon icon={faCheck} className={validUserName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validUserName || !userName ? "hide" : "invalid"} />
                    </label>
                        <input
                            type="text"
                            required
                            value={userName}
                            onChange={e => setUserName( e.target.value )}
                            className="form-control"
                            id="userName"
                            name="userName"
                            ref={userRef}
                            onFocus={() => setUserNameFocus(true)}
                            onBlur={() => setUserNameFocus(false)}

                        />
                    </div>
                    <p id="uidnote" className={userNameFocus && userName && !validUserName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>

                    <div className="col-sm-6 form-group">
                    <label htmlFor="password">
                        Password
                        <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
                    </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value )}
                            className="form-control"
                            id="password"
                            name="password"
                            // ref={userRef}
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                    </div>
                    <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: ! @ # $ %
                    </p>
                </div>
                <input className="btn btn-primary" type="submit" value="Login" autoFocus/>
            </form>
            </section>
        </main>
    )
}

export default LoginForm