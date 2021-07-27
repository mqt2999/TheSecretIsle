import React, {useEffect, useState} from "react";
import Container from "../components/Container";
import axios from "axios";
import '../components/SignupForm/style.css'
import Row from "../components/Row";
import Col from "../components/Col";
import Main from "../components/Main/Main";
import { useHistory } from "react-router-dom"; 


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signing up...");
    history.push('/loading')

    // useEffect(() => {
      axios.post('api/user/signup', {userName: email, password: password})
      .then (res => {
        console.log(res)
    })
    .catch(err => console.error(err))
  }

    return (
        <Container>
            <form onSubmit = {handleSubmit} className="login-form">
                <div className="mb-4">
                    <div className="">
                        <input type="text" 
                        className="input-field" 
                        id="email-input" 
                        onChange = {e => setEmail(e.target.value)}
                        placeholder="Username"/>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="">
                        <input type="password" 
                        className="input-field" 
                        id="password-input" 
                        placeholder="Password"/>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="">
                        <input type="password" 
                        className="input-field" 
                        id="password-confirm"
                        onChange = {e => setPassword(e.target.value)} 
                        placeholder="Confirm Password"/>
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
