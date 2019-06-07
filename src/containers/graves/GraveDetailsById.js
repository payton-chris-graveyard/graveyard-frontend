import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GraveDetails from '../../components/graves/GraveDetails';
import {
  getGraveDetailSelector,
  getGraveDetailSelectorLoading
} from '../../selectors/graveDetailSelectors';
import { fetchGrave } from '../../actions/getGraveDetailAction';

class GraveDetailsById extends PureComponent {
  static propTypes = {
    graveDetails: PropTypes.object,
    loading: PropTypes.bool,
    fetch: PropTypes.func
  }

  componentDidMount() {
    this.props.fetch();
  }

  // componentDidUpdate() {
  //   // UPDATE FN
  // }

  render() {
    const { graveDetails, loading } = this.props;
    if(loading) return <h1>Loading...</h1>;
    return <GraveDetails graveDetails={graveDetails} />;
  }
}

const mapStateToProps = state => ({
  graveDetails: getGraveDetailSelector(state),
  loading: getGraveDetailSelectorLoading(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchGrave(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraveDetailsById);
