import React from 'react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import cookie from 'js-cookie';

function AccountPermissions() {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    getUsers();
  },[]);

  async function getUsers(){
    const url = `${baseUrl}/api/users`;
    const token = cookie.get('token');
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    console.log(response.data)
    // setUsers(response.data);
  }

  return(
    <>
    </>
  )
}

export default AccountPermissions;
