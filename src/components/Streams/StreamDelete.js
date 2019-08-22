import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = props => {
  const actions = (
    <React.Fragment>
      <button className="ui button basic blue">Delete</button>
      <button className="ui button basic red">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      Stream Delete
      <Modal
        title="Delete Stream"
        content="Are you sure want to delete this stream???"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

export default StreamDelete;
