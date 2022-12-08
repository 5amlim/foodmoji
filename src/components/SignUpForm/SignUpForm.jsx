import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class SignUpForm extends Component {

    state = {
          name: '',
          email: '',
          password: '',
          confirm: '',
          error: ''
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
          const formData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          };
          const user = await signUp(formData);
          this.props.setUser(user);
        } catch {
          this.setState({ error: 'Sign Up Failed - Try Again' });
        }

    }

    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
        });
      };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} required placeholder="Enter name" />
              <Form.Text className="text-muted">
              {this.state.error}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} required placeholder="Enter email" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="secondary" type="submit" disabled={disable}>
              SIGN UP
            </Button>
          </Form>
        );
    }
}