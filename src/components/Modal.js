import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className="ui dimmer modals visible active"
    >
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure want to delete this stream?</div>
        <div className="actions">
          <button className="ui button basic blue">Delete</button>
          <button className="ui button basic red">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
