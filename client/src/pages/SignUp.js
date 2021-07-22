import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function SignUp() {
    return (
        <Container>
          <form className="signup-form">
               <div className="mb-3">
                  <label for="staticEmail" className="col-sm-2 col-form-label">Username</label>
                  <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputUsername" placeholder=""/>
                  </div>
              </div>
              <div className="mb-3">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                      <input type="password" className="form-control" id="inputPassword"/>
                  </div>
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
      </Container>
    )
}

export default SignUp