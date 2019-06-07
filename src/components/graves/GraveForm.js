import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { patchGrave } from '../../services/fetchApi';

export default class GraveForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    name: '',
    dob: '',
    dod: '',
    causeOfDeath: '',
    epitaph: '',
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, dob, dod, causeOfDeath, epitaph } = this.state;
    this.props.onSubmit(name, dob, dod, causeOfDeath, epitaph);
    // patchGrave(this.state);
    // console.log('hihii');
    console.log('GraveForm.js', this.state);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, dob, dod, causeOfDeath, epitaph } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={name} placeholder="Name" onChange={this.handleChange} />
        <input name="dob" value={dob} placeholder="Date of Birth" onChange={this.handleChange} />
        <input name="dod" value={dod} placeholder="Date of Death" onChange={this.handleChange} />
        <input name="causeOfDeath" value={causeOfDeath} placeholder="Cause of Death" onChange={this.handleChange} />
        <textarea name="epitaph" value={epitaph} placeholder="Epitaph" onChange={this.handleChange}></textarea>
        <button>Submit</button>
      </form>
    );
  }
}
