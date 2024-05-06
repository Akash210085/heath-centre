import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhoneIcon from '@mui/icons-material/Phone';
import LogoutIcon from '@mui/icons-material/Logout';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

export default function IconPositionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example" 
    >
      <Tab icon={<DashboardIcon/>} iconPosition="start" label="Dashboard" />
      <Tab icon={<AccountCircleIcon />} iconPosition="start" label="Profile" />
      <Tab icon={<PhoneIcon />} iconPosition="start" label="Contacts" />
      <Tab icon={<LogoutIcon/>} iconPosition="start" label="Logout" />
    </Tabs>
  );
}
