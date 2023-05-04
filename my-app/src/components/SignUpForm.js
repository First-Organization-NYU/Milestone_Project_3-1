import { useState, useRef, useEffect} from "react";
import { useNavigate} from "react-router";
import './StyleForm.css'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//https://regex101.com to test and explain pattern
const FIRST_LAST_NAME_REGEX = /^[a-z ,.'-]+$/i  // copy regex pattern from https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
/* eslint-disable-next-line */
const EMAIL_REGEX = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;//eslint:Unnecessary escape character: \/. use:/* eslint-disable-next-line */ to disable rule warning.


function SignUpForm() {
	const navigate = useNavigate()

	const [inputCredentials, setInputCredentials] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: ""
		
	});

	const [validFirstName, setValidFirstName] = useState(false);
	const [firstNameFocus, setFirstNameFocus] = useState(false);

	const [validLastName, setValidLastName] = useState(false);
	const [lastNameFocus, setLastNameFocus] = useState(false);

	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [matchPassword, setMatchPassword] = useState('');
	const [validMatchPassword, setValidMatchPassword] = useState(false);
	const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);


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
		const result = FIRST_LAST_NAME_REGEX.test(inputCredentials.first_name); //Check for valid input against REGEX.
		console.log(result);
		console.log(inputCredentials.first_name);
		setValidFirstName(result);
		// setValidFirstName(FIRST_LAST_NAME.test(inputCredential.first_name));
	}, [inputCredentials.first_name])

	useEffect(() => {
		const result = FIRST_LAST_NAME_REGEX.test(inputCredentials.last_name);
		console.log(result);
		console.log(inputCredentials.last_name);
		setValidLastName(result)
		// setValidLastName(FIRST_LAST_NAME.test(inputCredential.last_name));
	}, [inputCredentials.last_name])

	useEffect(() => {
		const result = EMAIL_REGEX.test(inputCredentials.email);
		console.log(result);
		console.log(inputCredentials.email);
		setValidEmail(result)
		// setValidEmail(EMAIL_REGEX.test(inputCredential.email));
	}, [inputCredentials.email])

	useEffect(() => {
		const result = PWD_REGEX.test(inputCredentials.password);
		console.log(result);
		console.log(inputCredentials.password);
		setValidPassword(result);
		const match = inputCredentials.password === matchPassword;
		setValidMatchPassword(match)
		// setValidPassword(PWD.test(inputCredentials.password));
		// setValidMatchPassword(inputCredentials.password === matchPassword);
	}, [inputCredentials.password, matchPassword])

	
	useEffect(() => {
        setErrMsg('');
    }, [inputCredentials.first_name, inputCredentials.last_name, inputCredentials.password, matchPassword])


	
	


  async function handleSubmit(e) {
    e.preventDefault();

	const input1 = FIRST_LAST_NAME_REGEX.test(inputCredentials.first_name);
	const input2 = FIRST_LAST_NAME_REGEX.test(inputCredentials.last_name);
	const input3 = EMAIL_REGEX.test(inputCredentials.email);
	const input4 = PWD_REGEX.test(inputCredentials.password);
	
	
	if (!input1 || !input2 || !input3 || !input4 ) {
		setErrMsg("Please enter the correct value(s) in your Sign_up form");//printout(<p></p>) at the top of signup form.
		return;
	}

		await fetch("http://localhost:3002/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(inputCredentials),
		})
			.then(res=>{
				if(res.ok) {
					console.log("SUCCESS!")
					setSuccess(true);
				} else {
					console.log(res.data)
					console.log("Not Successful")
				}
			})
			.then(data => console.log(data))
			.catch(error => console.log("ERROR"))
			// console.log(response?.data);
            // console.log(response?.accessToken);
            // console.log(JSON.stringify(response))
            
            //clear state and controlled inputs
            //need value attribes on inputs for this
            
            setInputCredentials('');
            
			// setUser(''); See if setUser('') will reset the value to ('') to reduce code.

  	// }	catch (err) { //(use opt chaining) is there an err=>is error code 409(conflict)=>different error code(sign up failed)
	// 		if (!err?.response) {  //is there no error=> no response from server
	// 			setErrMsg('No Server Response');
	// 		} else if (err.response?.status === 409) {
	// 			setErrMsg('User with this data (especially the username) may already exists on the server, so it cannot be created');
	// 		} else {
	// 			setErrMsg('Sign Up Failed')
	// 		}
			errRef.current.focus(); //focus is set on the error statement printed.
		}
		// navigate.push(`/`);
	


  return ( 
	<>
		{success ? (
                <section>
                    <p><h1>Success!</h1></p>
					<p>As a new customer, you'll receive 10% off on you first order</p>
                    <p>
                    	<a href="/login">Sign In</a> 

                    </p>
                </section>
            ) : (

		<section>
			
			<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
			<div>
			<h1>Sign-Up Form</h1>
			</div>

			<form onSubmit={handleSubmit}>  
				<label htmlFor="first_name">
					First Name
					<FontAwesomeIcon icon={faCheck} className={validFirstName ? "valid" : "hide"} />
					<FontAwesomeIcon icon={faTimes} className={validFirstName || !inputCredentials.first_name ? "hide" : "invalid"} />
				</label>
				<input
					type="text"
					required
					value={inputCredentials.first_name}
					onChange={e => setInputCredentials({ ...inputCredentials, first_name: e.target.value })}
					className="form-control"
					id="first_name"
					name="first_name"
					ref={userRef}//useRef is assigned ref attribute of the input field.
					onFocus={() => setFirstNameFocus(true)}
					onBlur={() => setFirstNameFocus(false)} />

				<p  className={firstNameFocus && !validFirstName ? "instructions" : "offscreen"}>
					<FontAwesomeIcon icon={faInfoCircle} />
					Must have valid a first name.
				</p>

				<label htmlFor="last_name">
					Last Name
					<FontAwesomeIcon icon={faCheck} className={validLastName ? "valid" : "hide"} />
					<FontAwesomeIcon icon={faTimes} className={validLastName || !inputCredentials.last_name ? "hide" : "invalid"} />
				</label>
				<input
					type="text"
					required
					value={inputCredentials.last_name}
					onChange={e => setInputCredentials({ ...inputCredentials, last_name: e.target.value })}
					className="form-control"
					id="last_name"
					name="last_name"
					onFocus={() => setLastNameFocus(true)}
					onBlur={() => setLastNameFocus(false)} />
				<p  className={lastNameFocus && !validLastName ? "instructions" : "offscreen"}>
					<FontAwesomeIcon icon={faInfoCircle} />
					Must have valid last name.
				</p>

				<label htmlFor="email">
					Email
					<FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
					<FontAwesomeIcon icon={faTimes} className={validEmail || !inputCredentials.email ? "hide" : "invalid"} />
				</label>
				<input
					type="text"
					required
					value={inputCredentials.email}
					onChange={e => setInputCredentials({ ...inputCredentials, email: e.target.value })}
					className="form-control"
					id="email"
					name="email"
					onFocus={() => setEmailFocus(true)}
					onBlur={() => setEmailFocus(false)} 
					/>
				<p  className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
					<FontAwesomeIcon icon={faInfoCircle} />
					Must match the first password input field.Uppercase (A-Z) and lowercase (a-z) Digits (0-9).
					Characters ! # $ % & ' * + - / = ? ^ _ ` {`|`} ~
					Character . ( period) not the first or last character & will not come one after the other.
				</p>
				
				<label htmlFor="password">
					Password
					<FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
					<FontAwesomeIcon icon={faTimes} className={validPassword || !inputCredentials.password ? "hide" : "invalid"} />
				</label>
				<input
					type="password"
					required
					value={inputCredentials.password}
					onChange={e => setInputCredentials({ ...inputCredentials, password: e.target.value })}
					className="form-control"
					id="password"
					name="password"
					onFocus={() => setPasswordFocus(true)}
					onBlur={() => setPasswordFocus(false)} 
				/>
				<p  className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
					<FontAwesomeIcon icon={faInfoCircle} />
					8 to 24 characters.<br />
					Must include uppercase and lowercase letters, a number and a special character.<br />
					Allowed special characters: ! @ # $ %
				</p>
				

				<label htmlFor="confirm_pwd">
					Confirm Password
					<FontAwesomeIcon icon={faCheck} className={validMatchPassword && matchPassword ? "valid" : "hide"} />
					<FontAwesomeIcon icon={faTimes} className={validMatchPassword || !matchPassword ? "hide" : "invalid"} />
				</label>
				<input
					type="password"
					required
					value={inputCredentials.matchPassword}
					onChange={(e) => setMatchPassword(e.target.value)}
					className="form-control"
					id="confirm_pwd"
					name="confirm_pwd"
					onFocus={() => setMatchPasswordFocus(true)}
					onBlur={() => setMatchPasswordFocus(false)} />

				<p  className={matchPasswordFocus || !validMatchPassword ? "instructions" : "offscreen"}>
					<FontAwesomeIcon icon={faInfoCircle} />
					Must match the first password input field.
				</p>

				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</section>
				
										
		)}
	</>
			
	)
  
}

export default SignUpForm;