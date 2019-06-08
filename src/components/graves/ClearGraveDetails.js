import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { patchGrave } from '../../services/fetchApi';

export default class ClearGraveDetails extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    graveDetail: PropTypes.object.isRequired
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
    const graveObj = {
      id: this.props.graveDetail.id,
      name: '',
      dob: '',
      dod: '',
      causeOfDeath: '',
      epitaph: '',
      occupied: false
    };
    console.log(graveObj);
    patchGrave(graveObj);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    // const { name, dob, dod, causeOfDeath, epitaph, occupied } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <button>Exhume</button>
      </form>
    );
  }
}
