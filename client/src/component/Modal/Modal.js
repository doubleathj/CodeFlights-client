import React from 'react';

import { Modal } from 'react-responsive-modal';

class modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: false,
      login: false,
    };
  }

  render() {
    const { sign, login } = this.state;
    return (
      <>
        <Modal sign={sign} onClose={this.props.onCloseModal}>
          <div className='modal-body'>
            <h3>SIGNUP</h3>
            <div className='email'></div>
          </div>
        </Modal>
      </>
    );
  }
}
