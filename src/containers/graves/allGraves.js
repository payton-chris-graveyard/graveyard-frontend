import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-dom';
import {
  getGraveListSelector,
  getGraveListLoadingSelector
} from '../../selectors/gaveListSelectors';
import GraveList from '../../components/graves/GraveList';
import { fetchGraveList } from '../../actions/getGraveListAction';

class AllGraves extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    graveList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {
      graveList,
      loading
    } = this.props;
    if(loading) return <h1>Loading...</h1>;

    return (
      <GraveList graveList={graveList} />
    );
  }
}

const mapStateToProps = state => ({
  gaveList: getGraveListSelector(state),
  loading: getGraveListLoadingSelector(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchGraveList(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllGraves);
