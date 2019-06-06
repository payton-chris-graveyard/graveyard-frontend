import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getGraveyardListSelector,
  getGraveyardListLoadingSelector
} from '../../selectors/graveyardListSelectors';
import GraveyardList from '../../components/graveyards/GraveyardList';
import { fetchGraveyardList } from '../../actions/getGraveyardListAction';

class AllGraveyards extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    graveyardList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {
      graveyardList,
      loading
    } = this.props;
    if(loading) return <h1>Loading...</h1>;

    return (
      <GraveyardList graveyardList={graveyardList} />
    );
  }
}

const mapStateToProps = state => ({
  graveyardList: getGraveyardListSelector(state),
  loading: getGraveyardListLoadingSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchGraveyardList());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AllGraveyards);
