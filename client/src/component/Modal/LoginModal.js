import React from 'react';
import './Modal.css';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleLoginSubmit(e) {
    const { email, password } = this.state;
    const { handleLogin,handleLoginModal } = this.props;

    let data ={email : email, password : password}
    axios.post('http://15.164.229.68:8080/user/signin',data, {withCredentials: true}
      )
    
    // fetch('http://15.164.229.68:8080/user/signin', {
    //   method : 'POST',
    //   body : JSON.stringify({ email : email, password : password}),
    //   headers : {
    //     "contents-type" : "application/json"
    //   },
    //   credentials : "include"
    // })
      .then(() => {
        handleLogin();
        this.props.history.push('/');
        handleLoginModal();
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className='modal'></div>
        <div className='modalContents'>
          <form onSubmit={this.handleLoginSubmit}>
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
            <button type='submit' >Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginModal);
