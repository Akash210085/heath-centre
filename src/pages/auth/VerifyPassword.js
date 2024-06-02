import React from "react";
import logo from "../../assets/gif/Authentication.gif";
import VerifyPasswordForm from "../../components/auth/VerifyPasswordForm";
function VerifyPasswordPage() {
  return (
    <div className="flex-container">
      <div className="gif">
        <img src={logo} alt="loading..." />
      </div>
      <div className="welcome">
        <h3>Verify You Email</h3>
        <p>Health Centre IIT Kanpur</p>
        <VerifyPasswordForm />
      </div>
    </div>
  );
}

export default VerifyPasswordPage;
