import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import SignIn from "../pages/auth/SignIn";
import Profile from "./Profile";
import Contacts from "./Contacts";
import SignUp from "../pages/auth/SignUp";
import DashboardContainer from "./Dashboard/DashboardContainer";
import Chats from "./Chats";
function GeneralApp() {
  const [isSignIn, SetIsSignIn] = useState(false);
  const [isDashboard, SetIsDashboard] = useState(false);
  const [isProfile, SetIsProfile] = useState(false);
  const [isContacts, SetIsContacts] = useState(false);
  const [isRegister, SetIsRegister] = useState(false);
  const [isChat, SetIsChat] = useState(false);
  function onClickSignIn() {
    SetIsSignIn(true);
    SetIsDashboard(true);
  }
  function onClickSignUp() {
    SetIsRegister(true);
  }

  function onClickLink() {
    SetIsRegister(false);
  }

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
              SetIsChat={SetIsChat}
            />
            {isDashboard && <DashboardContainer />}
            {isProfile && <Profile />}
            {isContacts && <Contacts />}
            {isChat && <Chats />}
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
export default GeneralApp;
