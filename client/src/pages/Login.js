import React ,{useEffect, useState} from "react";
import Container from "../components/Container";
import Main from "../components/Main/Main";
import LoginForm from "../components/LoginForm/LoginForm";
import MainTitle from "../components/MainTitle/MainTitle";
import axios from "axios"
import '../components/LoginForm/style.css'
function Login() {

  const [users, setUsers] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
useEffect ( () => {
  axios.post(`/api/user/login`)
  .then(res => {
    console.log(res.data)
  })
  .catch(err => console.error(err))
  })

  
    return(
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
              <div className="d-grid gap-2">
                  <button type="submit" id="login-btn" className="btn btn-light">Login</button>
              </div>
              <p id="login-text" className="mt-4 text-center" >Don't have an account?<a type="button" href="/signUp" className="p-1 signup">Sign up</a></p>
          </form>
      </Container>
  )
}

export default Login