import React from 'react';
import {connect} from 'react-redux';
import Lab4 from './Lab4';
import {
  showResult,
  ChangeAdjacency,
  ChangeVertexes
} from '../../actions/Lab4Actions';

const Lab4Container = props => {
  return (
    <Lab4
      state={props.state}
      showResult={props.showResult}
      ChangeAdjacency={props.ChangeAdjacency}
      ChangeVertexes={props.ChangeVertexes}
    />
  );
};

const mapStateToProps = store => {
  return {
    state: store.lab4
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showResult: () => dispatch(showResult()),
    ChangeAdjacency: ({from, to}) => dispatch(ChangeAdjacency({from, to})),
    ChangeVertexes: value => dispatch(ChangeVertexes(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lab4Container);
