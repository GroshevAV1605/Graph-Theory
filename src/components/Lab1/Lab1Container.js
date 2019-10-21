import React from 'react';
import {connect} from 'react-redux';
import {
  showResult,
  ChangeAdjacency,
  ChangeVertexCount
} from '../../actions/Lab1Actions';
import Lab1 from './Lab1';

const Lab1Conainer = props => {
  return (
    <Lab1
      state={props.state}
      showResult={props.showResult}
      ChangeAdjacency={props.ChangeAdjacency}
      ChangeVertexCount={props.ChangeVertexCount}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showResult: () => dispatch(showResult()),
    ChangeAdjacency: (index, value) =>
      dispatch(ChangeAdjacency({index, value})),
    ChangeVertexCount: value => dispatch(ChangeVertexCount(value))
  };
};

const mapStateToProps = store => {
  return {
    state: store.lab1
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lab1Conainer);
