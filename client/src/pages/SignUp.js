import React, {useEffect, useState} from "react";
import Container from "../components/Container";
import axios from "axios"
// import '../components/SignupForm/style.css'
import Row from "../components/Row";
import Col from "../components/Col";
import Main from "../components/Main/Main";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 // put this on the submit button for the sign up
  function createUser(){
    
    axios.get(`/api/story/`)
    .then(res => {
      console.log(res.data)
    })
    
      
  }

  function handleSubmit () {

  }
    return (
        <Container>
            <form className="login-form">
                <div className="mb-4">
                    <div className="">
                        <input type="text" className="input-field" id="email-input" placeholder="Username"/>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="">
                        <input type="password" className="input-field" id="password-input" placeholder="Password"/>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="">
                        <input type="password" className="input-field" id="password-input" placeholder="Confirm Password"/>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" id="login-btn" className="btn btn-light">Sign Up</button>
                </div>
            </form>
        </Container>
    )
}

// Where the island cradles the moon
export default SignUp