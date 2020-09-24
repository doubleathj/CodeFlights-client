import React from 'react';
import './Modal.css'
import { Link, withRouter } from 'react-router-dom';

function Modal () {
  return (
    <div>
    <div className='modal'></div>
    <div className='modalContents'>
        <form >
          <input
            type='email'
            name='email'
            placeholder='Email'
            
          />
          <input
            type='password'
            minLength='8'
            name='password'
            placeholder='password'
            
            
          />
          <div>
            <Link to='/'>아직 아이디가 없으신가요?</Link>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
      </div>
  )
}

export default Modal