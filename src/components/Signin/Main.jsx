import React from "react";

import Signform from "./Signform";
function Main(props) {
  return (
    <div class="flex-container">
      <div className="gif">
        <img src={props.logo} alt="loading..." />
      </div>
      <div className="welcome">
        <h3>Welcome {props.welcomeText}</h3>
        <h3>{props.welcomeHeading}</h3>
        <p>Health Centre IIT Kanpur</p>
        <Signform
          onClickSignIn={props.onClickSignIn}
          isSignIn={props.isSignIn}
          isRegister={props.isRegister}
          onClickSignUp={props.onClickSignUp}
          buttonText={props.welcomeHeading}
          onClickLink={props.onClickLink}
        />
      </div>
    </div>
  );
}

export default Main;
