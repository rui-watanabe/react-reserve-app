import React from 'react';
import axios from 'axios';
import { Header, Table, Icon, Checkbox } from 'semantic-ui-react';
import baseUrl from '../../../utils/baseUrl';
import cookie from 'js-cookie';
import formatDate from '../../../utils/formatDate';
import {
  // AccountPermissionsProps,
  SetUsersType,
  UserPermissionProps,
} from '../Types/AccountType';

// function AccountPermissions({ id }: AccountPermissionsProps) {
function AccountPermissions(): JSX.Element {
  const [users, setUsers] = React.useState<SetUsersType>([]);

  React.useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const url = `${baseUrl}/api/users`;
    const token = cookie.get('token');
    const payload = { headers: { Authorization: token } };
    const response = await axios.get<SetUsersType>(url, payload);
    setUsers(response.data);
  }

  return (
    <div style={{ margin: '2em 0' }}>
      <Header as="h2">
        <Icon name="settings" />
        User Permissions
      </Header>
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Joined</Table.HeaderCell>
            <Table.HeaderCell>Updated</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body data-testid="user-permission">
          {users.length != 0
            ? users.map((user) => (
                <UserPermission key={String(user._id)} user={user} />
              ))
            : null}
        </Table.Body>
      </Table>
    </div>
  );
}

function UserPermission({ user }: UserPermissionProps) {
  const [admin, setAdmin] = React.useState(user.role === 'admin');

  const isFirstRun = React.useRef(true);

  React.useEffect(() => {
    //current = initial setting value = true
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    updatePermission();
  }, [admin]);

  function handleChangePermission() {
    setAdmin((prevState) => !prevState);
  }

  async function updatePermission() {
    const url = `${baseUrl}/api/account`;
    const payload = { _id: user._id, role: admin ? 'admin' : 'user' };
    await axios.put(url, payload);
  }

  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Checkbox checked={admin} toggle onChange={handleChangePermission} />
      </Table.Cell>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{formatDate(user.createdAt)}</Table.Cell>
      <Table.Cell>{formatDate(user.updatedAt)}</Table.Cell>
      <Table.Cell>{admin ? 'admin' : 'user'}</Table.Cell>
    </Table.Row>
  );
}

export default AccountPermissions;
