import React from "react";
import Heading from "../Signin/Heading";
import Main from "../Signin/Main";
import SignUplogo from "./Signup3.gif";
function SignUp(props) {
  return (
    <div>
      <Heading />
      <Main
        onClickSignUp={props.onClickSignUp}
        isRegister={props.isRegister}
        onClickSignIn={props.onClickSignIn}
        isSignIn={props.isSignIn}
        onClickLink={props.onClickLink}
        logo={SignUplogo}
        welcomeHeading="Sign up"
        welcomeText="!"
      />
    </div>
  );
}
export default SignUp;
