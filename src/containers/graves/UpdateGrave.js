import { connect } from 'react-redux';
import { updateGrave } from '../../actions/updateGraveAction';
import GraveForm from '../../components/graves/GraveForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(name, dob, dod, causeOfDeath, epitaph) {
    dispatch(updateGrave(name, dob, dod, causeOfDeath, epitaph));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(GraveForm);
