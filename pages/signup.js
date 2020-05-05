import React from 'react';
import { Button, Form, Icon, Message, Segment } from 'semantic-ui-react';
import Link from 'next/link';

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
}

function Signup() {
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  },[user])

  function handleChange(event){
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value}));
  }

  return(
    <>
      <Message
        attached
        icon="settings"
        header="Get Started!"
        content="Create a new account"
        color="teal"
      />
      <Form>
        <Segment>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            label="Name"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            icon="envelope"
            iconPosition="left"
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button
            icon="signup"
            type="submit"
            color="orange"
            content="Signup"
            disabled={disabled}
          />
        </Segment>
      </Form>
      <Message attached="bottom" warning>
        <Icon name="help" />
        Exiting user?{" "}
        <Link href="/login">
          <a>Log in here</a>
        </Link>{""}instead.
      </Message>
    </>
  )
}

export default Signup;
