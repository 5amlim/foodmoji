import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
    <Form.Group className="mb-3 " >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder="Enter email" />
      {error?
      <Form.Text className="text-muted">
      &nbsp;{error}
      </Form.Text>
      :
      <></>
      }
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control placeholder="Password" type="password" name="password" value={credentials.password} onChange={handleChange} required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>
    <Button variant="primary" type="submit">
      LOG IN
    </Button>
  </Form>
  );
}
