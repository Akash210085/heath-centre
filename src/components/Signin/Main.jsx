import React from "react";
import SignInform from "./SignInform";
import Signupform from "../Signup/Signupform";
function Main(props) {
  return (
    <div className="flex-container">
      <div className="gif">
        <img src={props.logo} alt="loading..." />
      </div>
      <div className="welcome">
        <h3>Welcome {props.welcomeText}</h3>
        <h3>{props.welcomeHeading}</h3>
        <p>Health Centre IIT Kanpur</p>
        {props.isRegister ? (
          <SignInform
            onClickSignIn={props.onClickSignIn}
            isSignIn={props.isSignIn}
            isRegister={props.isRegister}
            onClickSignUp={props.onClickSignUp}
            buttonText={props.welcomeHeading}
            onClickLink={props.onClickLink}
          />
        ) : (
          <Signupform onClickSignUp={props.onClickSignUp} />
        )}
      </div>
    </div>
  );
}

export default Main;
