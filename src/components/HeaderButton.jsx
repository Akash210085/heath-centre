import  React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

 function HeaderButton() {
  return (
    <Stack spacing={2} direction="row" className='button-group'>
      <Button variant="text" size="large">Profile</Button>
      <Button variant="text" size="large">Logout</Button>
      <Button variant="text" size="large">Contacts</Button>
    </Stack>
  );
}

//  function HeaderButton() {
//   return (
//     <button>Profile</button>
//   );
// }

 export default HeaderButton;