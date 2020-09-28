import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

axios.defaults.withCredentials = true;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password_confirm: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSubmit(e) {
    const { email, username, password, passwordConfirm } = this.state;

    axios
      .post('https://codeflights.xyz/user/signup', {
        email: email,
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
      })
      .then(() => {
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
            type='username'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange('username')}
          />
          <input
            type='password'
            minLength='8'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <input
            type='password'
            minLength='8'
            name='passwordConfirm'
            placeholder='passwordConfirm'
            value={this.state.passwordConfirm}
            onChange={this.handleChange('passwordConfirm')}
          />
          <div>
            <Link to='/'>이미 아이디가 있으신가요??</Link>
          </div>
          <button type='submit'>submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
