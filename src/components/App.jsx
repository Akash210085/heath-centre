import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Dashboard from "./Dashboard";
import SignIn from "./Signin/SignIn";
import Profile from "./Profile";
import Contacts from "./Contacts";
import SignUp from "./Signup/SignUp";
function App() {
  const [isSignIn, SetIsSignIn] = useState(false);
  const [isDashboard, SetIsDashboard] = useState(false);
  const [isProfile, SetIsProfile] = useState(false);
  const [isContacts, SetIsContacts] = useState(false);
  const [isRegister] = useState(true);
  function onClickSignIn() {
    SetIsSignIn(true);
    SetIsDashboard(true);
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
            {isDashboard && <Form />}
            {isProfile && <Profile />}
            {isContacts && <Contacts />}
            <Footer />
          </div>
        ) : (
          <SignIn
            className="signIn"
            onClickSignIn={onClickSignIn}
            isSignIn={isSignIn}
          />
        )
      ) : (
        <SignUp />
      )}
    </div>
  );
}
export default App;
