import { useState, useRef, useEffect} from "react";
// import { useNavigate} from "react-router";
import './StyleForm.css'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//https://regex101.com to test and explain pattern
const FIRST_LAST_NAME_REGEX = /^[a-z ,.'-]+$/i  // copy regex pattern from https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{7,29}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;


function SignUpForm() {
	// const navigate = useNavigate()

	// const [user, setUser] = useState({
	// 	firstName: "",
	// 	lastName: "",
	// 	userName: "",
	// 	password: "",
	// 	email: ""
	// });

	const [firstName, setFirstName] = useState('');
	const [validFirstName, setValidFirstName] = useState(false);
	const [firstNameFocus, setFirstNameFocus] = useState(false);

	const [lastName, setLastName] = useState('');
	const [validLastName, setValidLastName] = useState(false);
	const [lastNameFocus, setLastNameFocus] = useState(false);

	const [userName, setUserName] = useState('');
	const [validUserName, setValidUserName] = useState(false);
    const [userNameFocus, setUserNameFocus] = useState(false);

	const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [matchPassword, setMatchPassword] = useState('');
	const [validMatchPassword, setValidMatchPassword] = useState(false);
	const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [errMsg, setErrMsg] = useState(false);
	const [success, setSuccess] = useState(false);

	const userRef = useRef(); // no initial values
	const errRef = useRef();


//Using RegExp.prototype.test() method:  Source MDN. The test() method executes a search for 
//a match between a regular expression and a specified string. Returns true if there is a match; false otherwise.

	useEffect(() => {
		userRef.current.focus();
	}, [])

	useEffect(() => {
		const result = FIRST_LAST_NAME_REGEX.test(firstName);
		console.log(result);
		console.log(firstName);
		setValidFirstName(result);
		// setValidFirstName(FIRST_LAST_NAME.test(firstName));
	}, [firstName])

	useEffect(() => {
		const result = FIRST_LAST_NAME_REGEX.test(lastName);
		console.log(result);
		console.log(lastName);
		setValidLastName(result)
		// setValidLastName(FIRST_LAST_NAME.test(lastName));
	}, [lastName])

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
		const match = password === matchPassword;
		setValidMatchPassword(match)
		// setValidPassword(PWD.test(password));
		// setValidMatchPassword(password === matchPassword);
	}, [password, matchPassword])

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
		console.log(result);
		console.log(email);
		setValidEmail(result)
		// setValidEmail(EMAIL_REGEX.test(email));
	}, [email])


	useEffect(() => {
        setErrMsg('');
    }, [userName, password, matchPassword])


	
	


  async function handleSubmit(e) {
    e.preventDefault();

	const input1 = FIRST_LAST_NAME_REGEX.test(firstName);
	const input2 = FIRST_LAST_NAME_REGEX.test(lastName);
	const input3 = USERNAME_REGEX.test(userName);
	const input4 = PWD_REGEX.test(password);
	const input5 = EMAIL_REGEX.test(email);
	
	if (!input1 || !input2 || !input3 || !input4 || !input5 ) {
		setErrMsg("Please enter the correct value(s) in your Sign_up form");//printout(<p></p>) at the top of signup form.
		return;
	}
	try {

		await fetch(`${process.env.REACT_APP_SERVER_URL}users/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(firstName, lastName, userName, password, email),
		});
			// console.log(response?.data);
            // console.log(response?.accessToken);
            // console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attribes on inputs for this
            
            setFirstName('');
            setLastName('');
			setUserName('');
			setPassword('');
			setMatchPassword('');
			setValidMatchPassword('')
			setValidEmail('')

			// setUser(''); See if setUser('') will reset the value to ('') to reduce code.

  	}	catch (err) { //(use opt chaining) is there an err=>is error code 409(conflict)=>different error code(sign up failed)
			if (!err?.response) {  //is there no error=> no response from server
				setErrMsg('No Server Response');
			} else if (err.response?.status === 409) {
				setErrMsg('User with this data (especially the username) may already exists on the server, so it cannot be created');
			} else {
				setErrMsg('Sign Up Failed')
			}
			errRef.current.focus(); //focus is set on the error statement printed.
		}
		// navigate.push(`/`);
	}


  return ( 
	<>
		{success ? (
			//  do better styling!
                <section>
                    <h1>Success!</h1>
					<p>As a new customer, you'll receive 10% off on you first order</p>
                    <p>
                    	<a href="/login">Sign In</a> 

                    </p>
                </section>
            ) : (
		<div>
			<p><h1>DOGGY CUTURE PET STORE</h1></p><section>
			<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
					  <h1>Sign-Up Form</h1>
					  <form onSubmit={handleSubmit}>
						  <div className="row">
							  <div className="col-sm-6 form-group">
								  <label htmlFor="firstName">
									  First Name
									  <FontAwesomeIcon icon={faCheck} className={validFirstName ? "valid" : "hide"} />
									  <FontAwesomeIcon icon={faTimes} className={validFirstName || !firstName ? "hide" : "invalid"} />
								  </label>
								  <input
									  type="text"
									  required
									  value={firstName}
									  onChange={e => setFirstName(e.target.value)}
									  className="form-control"
									  id="firstName"
									  name="firstName"
									  ref={userRef}//useRef is assigned ref attribute of the input field.
									  onFocus={() => setFirstNameFocus(true)}
									  onBlur={() => setFirstNameFocus(false)} />

								  <p id="confirmnote" className={firstNameFocus && !validFirstName ? "instructions" : "offscreen"}>
									  <FontAwesomeIcon icon={faInfoCircle} />
									  Must have valid a first name.
								  </p>

								  <label htmlFor="lastName">
									  Last Name
									  <FontAwesomeIcon icon={faCheck} className={validLastName ? "valid" : "hide"} />
									  <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? "hide" : "invalid"} />
								  </label>
								  <input
									  type="text"
									  required
									  value={lastName}
									  onChange={e => setLastName(e.target.value)}
									  className="form-control"
									  id="lastName"
									  name="lastName"
									//   ref={userRef}
									  onFocus={() => setLastNameFocus(true)}
									  onBlur={() => setLastNameFocus(false)} />
								  <p id="confirmnote" className={lastNameFocus && !validLastName ? "instructions" : "offscreen"}>
									  <FontAwesomeIcon icon={faInfoCircle} />
									  Must have valid last name.
								  </p>

								  <label htmlFor="userName">
									  Username:
									  <FontAwesomeIcon icon={faCheck} className={validUserName ? "valid" : "hide"} />
									  <FontAwesomeIcon icon={faTimes} className={validUserName || !userName ? "hide" : "invalid"} />
								  </label>
								  <input
									  type="text"
									  required
									  value={userName}
									  onChange={e => setUserName(e.target.value)}
									  className="form-control"
									  id="userName"
									  name="userName"
									//   ref={userRef}
									  onFocus={() => setUserNameFocus(true)}
									  onBlur={() => setUserNameFocus(false)} />
							  </div>
							  <p id="uidnote" className={userNameFocus && userName && !validUserName ? "instructions" : "offscreen"}>
								  <FontAwesomeIcon icon={faInfoCircle} />
								  8 to 24 characters.<br />
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
									  onChange={e => setPassword(e.target.value)}
									  className="form-control"
									  id="password"
									  name="password"
									//   ref={userRef}
									  onFocus={() => setPasswordFocus(true)}
									  onBlur={() => setPasswordFocus(false)} />
								  <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
									  <FontAwesomeIcon icon={faInfoCircle} />
									  8 to 24 characters.<br />
									  Must include uppercase and lowercase letters, a number and a special character.<br />
									  Allowed special characters: ! @ # $ %
								  </p>
							  </div>

							  <label htmlFor="confirm_pwd">
								  Confirm Password
								  <FontAwesomeIcon icon={faCheck} className={validMatchPassword && matchPassword ? "valid" : "hide"} />
								  <FontAwesomeIcon icon={faTimes} className={validMatchPassword || !matchPassword ? "hide" : "invalid"} />
							  </label>
							  <input
								  type="password"
								  required
								  value={matchPassword}
								  onChange={(e) => setMatchPassword(e.target.value)}
								  className="form-control"
								  id="confirm_pwd"
								  name="password"
								//   ref={userRef}
								  onFocus={() => setMatchPasswordFocus(true)}
								  onBlur={() => setMatchPasswordFocus(false)} />
						  </div>
						  <p id="confirmnote" className={matchPasswordFocus || !validMatchPassword ? "instructions" : "offscreen"}>
							  <FontAwesomeIcon icon={faInfoCircle} />
							  Must match the first password input field.
						  </p>

						  {/* <div className="row"> */}
						  <div className="col-sm-6 form-group">
							  <label htmlFor="email">
								  Email
								  <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
								  <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
							  </label>
							  <input
								  type="text"
								  required
								  value={email}
								  onChange={e => setEmail(e.target.value)}
								  className="form-control"
								  id="email"
								  name="email"
								//   ref={userRef}
								  onFocus={() => setEmailFocus(true)}
								  onBlur={() => setEmailFocus(false)} />
							  <p id="confirmnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
								  <FontAwesomeIcon icon={faInfoCircle} />
								  Must match the first password input field.Uppercase (A-Z) and lowercase (a-z) Digits (0-9).
								  Characters ! # $ % & ' * + - / = ? ^ _ ` {`|`} ~
								  Character . ( period) not the first or last character & will not come one after the other.
							  </p>

						  </div>
						  {/* </div> */}
						  <input className="btn btn-primary" type="submit" value="Sign Up" />
					  </form>


				  </section>
				</div>	
			)
			}
		</>
			
	)
  
}

export default SignUpForm;