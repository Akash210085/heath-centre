import React from "react";
import logo from "../../assets/gif/login2.gif";
import SignInform from "../../components/auth/SignInform";
function SignInPage(props) {
  return (
    <div className="flex-container">
      <div className="gif">
        <img src={logo} alt="loading..." />
      </div>
      <div className="welcome">
        <h3>Welcome Back!</h3>
        <h3>Sign In</h3>
        <p>Health Centre IIT Kanpur</p>
        <SignInform
          setSeverity={props.setSeverity}
          setShowSnachbar={props.setShowSnachbar}
          setSnachbarData={props.setSnachbarData}
        />
      </div>
    </div>
  );
}

export default SignInPage;
