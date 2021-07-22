import React ,{useEffect, useState} from "react";
import Container from "../components/Container";
import Main from "../components/Main/Main";
import LoginForm from "../components/LoginForm/LoginForm";
import MainTitle from "../components/MainTitle/MainTitle";
import axios from "axios"
function Login() {

  const [users, setUsers] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
useEffect ( () => {
  axios.post(`/api/user/login`)
  .then(res => {
    console.log(res.data)
  })
  })

  
    return(
    <Container>
            <form className="login-form">
          <div className="mb-3">
              <label for="staticEmail" className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                  <input type="text" className="form-control" id="email-input" placeholder="email@example.com"/>
              </div>
          </div>
          <div className="mb-3">
              <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                  <input type="password" className="form-control" id="password-input"/>
              </div>
          </div>
          <a type="button" href="/signUp" className="mb-3 form-text">Don't have an account? Sign up here</a>
          <div>
              <button type="submit" id="login-btn" className="btn btn-primary">Login</button>
          </div>
      </form>
    </Container>
  )
}

export default Login