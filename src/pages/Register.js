import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

function Register() {
  return (
    <MDBContainer>
      <MDBRow className="row d-flex justify-content-center">
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Register</p>
            <label htmlFor="defaultFormLoginNameEx" className="grey-text">
              Your Name
            </label>
            <input
              type="name"
              id="defaultFormLoginNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your Email-ID
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your Password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRepeatLoginPasswordEx" className="grey-text">
              Repeat Your Password
            </label>
            <input
              type="password"
              id="defaultFormRepeatLoginPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn color="primary">Sign Up</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
