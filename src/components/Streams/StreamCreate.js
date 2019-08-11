import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label htmlFor="">{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit(formProps) {
    console.log(formProps);
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Title can't be empty!";
  }

  if (!formValues.description) {
    errors.description = 'Please enter a description!';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);
