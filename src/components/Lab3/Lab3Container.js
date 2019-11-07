import React from 'react';
import {connect} from 'react-redux';
import Lab3 from './Lab3';
import {
  ChangeAdjacency,
  ChangeVertexes,
  showResult
} from '../../actions/Lab3Actions';

const Lab3Container = props => {
  return (
    <Lab3
      state={props.state}
      showResult={props.showResult}
      ChangeAdjacency={props.ChangeAdjacency}
      ChangeVertexes={props.ChangeVertexes}
    />
  );
};

const mapStateToProps = store => {
  return {
    state: store.lab3
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showResult: () => dispatch(showResult()),
    ChangeAdjacency: ({from, to}) => dispatch(ChangeAdjacency({from, to})),
    ChangeVertexes: value => dispatch(ChangeVertexes(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lab3Container);
