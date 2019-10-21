import React from 'react';
import Lab2 from './Lab2';
import {connect} from 'react-redux';
import {
  showResult,
  ChangeFirstAdjacency,
  ChangeSecondAdjacency,
  ChangeFirstVertexCount,
  ChangeSecondVertexCount
} from '../../actions/Lab2Actions';

const Lab2Container = props => {
  return (
    <Lab2
      state={props.state}
      showResult={props.showResult}
      ChangeFirstAdjacency={props.ChangeFirstAdjacency}
      ChangeSecondAdjacency={props.ChangeSecondAdjacency}
      ChangeFirstVertexCount={props.ChangeFirstVertexCount}
      ChangeSecondVertexCount={props.ChangeSecondVertexCount}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showResult: () => dispatch(showResult()),
    ChangeFirstAdjacency: ({i, j, value}) =>
      dispatch(ChangeFirstAdjacency({i, j, value})),
    ChangeSecondAdjacency: ({i, j, value}) =>
      dispatch(ChangeSecondAdjacency({i, j, value})),
    ChangeFirstVertexCount: value => dispatch(ChangeFirstVertexCount(value)),
    ChangeSecondVertexCount: value => dispatch(ChangeSecondVertexCount(value))
  };
};

const mapStateToProps = store => {
  return {
    state: store.lab2
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lab2Container);
