import React from 'react'
import './Login.css'

import {getAuth,signInWithPhoneNumber,RecaptchaVerifier } from "firebase/auth";
class Login extends React.Component {
    handleChange = (e) => {
        const {name, value } = e.target
        this.setState({
            [name] : value
        }) 
    }

//    configureCaptcha = () => {
// window.recaptchaVerifier = new RecaptchaVerifier('button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     this.onSignInSubmit();
//     console.log("Recaptcha verified")
//   },
//   //defaultCountry: "IN"
// });
//    }

//    onSignInSubmit = (e) =>{
//        e.preventDefault()
//        this.configureCaptcha()
//     const phoneNumber = "+91" + this.state.phone_no
//     console.log(phoneNumber)
//     const appVerifier = window.recaptchaVerifier;
//     const auth = getAuth();
//     firebase.auth().signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           window.confirmationResult = confirmationResult;
//           console.log("OTP has been sent")
//           // ...
//         }).catch((error) => {
//           // Error; SMS not sent
//           // ...
//           console.log("SMS not sent")
//         });
//    }
   onSubmitOTP = (e) => {
    e.preventDefault()
    const code = this.state.OTP_Number
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
   }
    render()
    {
    return (
        <div className="sign-in-button" >
            <h2 className="Log In "> Log In</h2>
            <input type="text" id="phone_no" className="phone_no" placeholder="phone number" onChange={this.handleChange}></input>
            <button id="button" className="button" onClick={this.onSignInSubmit}> SUBMIT</button>

        <div className="OTP" >
            <h2 className="OTP num"> Enter OTP</h2>
            <input type="text" id ="OTP" className="OTP_Number" placeholder="OTP" onChange={this.handleChange}></input>
            <button id="log_button" className="button_log" onClick={this.onSubmitOTP}> SUBMIT</button>
       </div>    
        </div>
    )
}
}




export default Login
