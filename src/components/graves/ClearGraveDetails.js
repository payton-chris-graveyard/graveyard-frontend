import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ClearGraveDetails extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    name: '',
    dob: '',
    dod: '',
    causeOfDeath: '',
    epitaph: '',
    occupied: false
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, dob, dod, causeOfDeath, epitaph, occupied } = this.state;
    this.props.onSubmit(name, dob, dod, causeOfDeath, epitaph, occupied);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    // const { name, dob, dod, causeOfDeath, epitaph, occupied } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <button>Clear</button>
      </form>
    );
  }
}
