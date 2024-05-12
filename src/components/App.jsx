import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import SignIn from "./Signin/SignIn";
import Profile from "./Profile";
import Contacts from "./Contacts";
import SignUp from "./Signup/SignUp";
import DashboardContainer from "./Dashboard/DashboardContainer";
function App() {
  const [isSignIn, SetIsSignIn] = useState(true);
  const [isDashboard, SetIsDashboard] = useState(true);
  const [isProfile, SetIsProfile] = useState(false);
  const [isContacts, SetIsContacts] = useState(false);
  const [isRegister, SetIsRegister] = useState(true);
  function onClickSignIn() {
    // console.log(isSignIn);
    SetIsSignIn(true);
    SetIsDashboard(true);
    // console.log(isSignIn);
  }
  function onClickSignUp() {
    // console.log(isRegister);
    SetIsRegister(true);
  }

  function onClickLink() {
    SetIsRegister(false);
  }
  //   background: #eee;
  //   background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  //   padding: 0 16px;
  if (isSignIn) {
    document.body.style.background = "#eee";
    document.body.style.backgroundImage =
      "url('https://www.transparenttextures.com/patterns/cubes.png')";
    document.body.style.padding = "0 16px";
  } else {
    document.body.style.padding = "0 32px";
    document.body.style.backgroundImage = "none";
    document.body.style.background = "#fff";
  }
  return (
    <div>
      {isRegister ? (
        isSignIn ? (
          <div>
            <Header />
            <Dashboard
              SetIsSignIn={SetIsSignIn}
              SetIsContacts={SetIsContacts}
              SetIsDashboard={SetIsDashboard}
              SetIsProfile={SetIsProfile}
            />
            {isDashboard && <DashboardContainer />}
            {isProfile && <Profile />}
            {isContacts && <Contacts />}
            <Footer />
          </div>
        ) : (
          <SignIn
            onClickSignIn={onClickSignIn}
            isSignIn={isSignIn}
            onClickSignUp={onClickSignUp}
            isRegister={isRegister}
            onClickLink={onClickLink}
          />
        )
      ) : (
        <SignUp
          onClickSignUp={onClickSignUp}
          isRegister={isRegister}
          onClickSignIn={onClickSignIn}
          isSignIn={isSignIn}
          onClickLink={onClickLink}
        />
      )}
    </div>
  );
}
export default App;
