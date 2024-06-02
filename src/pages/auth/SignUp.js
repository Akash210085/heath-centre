import React from "react";
import logo from "../../assets/gif/Signup3.gif";
import Signupform from "../../components/auth/Signupform";
function SignUpPage(props) {
  return (
    <div className="flex-container">
      <div className="gif">
        <img src={logo} alt="loading..." />
      </div>
      <div className="welcome">
        <h3>Welcome !</h3>
        <h3>Sign Up</h3>
        <p>Health Centre IIT Kanpur</p>
        <Signupform />
      </div>
    </div>
  );
}
export default SignUpPage;
