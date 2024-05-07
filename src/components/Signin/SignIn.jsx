import React from "react";
import logo from "./login1.gif";
import Signform from "./Signform";

function SignIn(props) {
  return (
    <div className="heading">
      <h1>Health Appointment Centre</h1>
      <h2>Indian Institute of Technology, Kanpur</h2>
      <div class="flex-container">
        <div className="gif">
          <img src={logo} alt="loading..." />
        </div>
        <div className="welcome">
          <h3>Welcome</h3>
          <h3>Sign in</h3>
          <p>Health Centre IIT Kanpur</p>
          <Signform
            onClickSignIn={props.onClickSignIn}
            isSignIn={props.isSignIn}
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
