import React from "react";
import IconPositionTabs from "./Tabs";
function Dashboard(props) {
  return (
    <div className="dashboard">
      <IconPositionTabs
        SetIsSignIn={props.SetIsSignIn}
        SetIsContacts={props.SetIsContacts}
        SetIsDashboard={props.SetIsDashboard}
        SetIsProfile={props.SetIsProfile}
        SetIsChat={props.SetIsChat}
      />
    </div>
  );
}
export default Dashboard;
