import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PhoneIcon from "@mui/icons-material/Phone";
import LogoutIcon from "@mui/icons-material/Logout";
// import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

export default function IconPositionTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleLogoutClick() {
    props.SetIsSignIn(false);
    props.SetIsContacts(false);
    props.SetIsDashboard(false);
    props.SetIsProfile(false);
  }

  function handleProfileClick() {
    props.SetIsProfile(true);
    props.SetIsContacts(false);
    props.SetIsDashboard(false);
  }

  function handleDashClick() {
    props.SetIsDashboard(true);
    props.SetIsProfile(false);
    props.SetIsContacts(false);
  }

  function handleContactsClick() {
    props.SetIsContacts(true);
    props.SetIsDashboard(false);
    props.SetIsProfile(false);
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <Tab
        icon={<DashboardIcon />}
        iconPosition="start"
        label="Dashboard"
        onClick={handleDashClick}
      />
      <Tab
        icon={<AccountCircleIcon />}
        iconPosition="start"
        label="Profile"
        onClick={handleProfileClick}
      />
      <Tab
        icon={<PhoneIcon />}
        iconPosition="start"
        label="Contacts"
        onClick={handleContactsClick}
      />
      <Tab
        icon={<LogoutIcon />}
        iconPosition="start"
        label="Logout"
        onClick={handleLogoutClick}
      />
    </Tabs>
  );
}
