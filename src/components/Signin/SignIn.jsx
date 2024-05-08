import React from "react";
import SignInlogo from "./login2.gif";

import Heading from "./Heading";
import Main from "./Main";
function SignIn(props) {
  return (
    <div>
      <Heading />
      <Main
        onClickSignIn={props.onClickSignIn}
        isSignIn={props.isSignIn}
        onClickSignUp={props.onClickSignUp}
        isRegister={props.isRegister}
        onClickLink={props.onClickLink}
        logo={SignInlogo}
        welcomeHeading="Sign in"
        welcomeText="Back!"
      />
    </div>
  );
}

export default SignIn;
