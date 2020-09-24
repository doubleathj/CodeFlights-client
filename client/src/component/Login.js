import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

axios.defaults.withCredentials = true;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSubmit(e) {
    const { email, password } = this.state;
    const { handleLogin } = this.props;

    axios
      .post('http://codeflight.com/user/signin', {
        email: email,
        password: password,
      })
      .then(() => {
        handleLogin();
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange('email')}
          />
          <input
            type='password'
            minLength='8'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <div>
            <Link to='/'>아직 아이디가 없으신가요?</Link>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
