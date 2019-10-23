import React from 'react';
import Lab2 from './Lab2';
import {connect} from 'react-redux';
import {
  showResult,
  ChangeFirstAdjacency,
  ChangeSecondAdjacency,
  ChangeFirstVertexes,
  ChangeSecondVertexes
} from '../../actions/Lab2Actions';

const Lab2Container = props => {
  return (
    <Lab2
      state={props.state}
      showResult={props.showResult}
      ChangeFirstAdjacency={props.ChangeFirstAdjacency}
      ChangeSecondAdjacency={props.ChangeSecondAdjacency}
      ChangeFirstVertexes={props.ChangeFirstVertexes}
      ChangeSecondVertexes={props.ChangeSecondVertexes}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showResult: () => dispatch(showResult()),
    ChangeFirstAdjacency: ({from, to}) =>
      dispatch(ChangeFirstAdjacency({from, to})),
    ChangeSecondAdjacency: ({from, to}) =>
      dispatch(ChangeSecondAdjacency({from, to})),
    ChangeFirstVertexes: value => dispatch(ChangeFirstVertexes(value)),
    ChangeSecondVertexes: value => dispatch(ChangeSecondVertexes(value))
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
