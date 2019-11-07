import {
  CHANGE_VERTEX_COUNT_L3,
  CHANGE_ADJACENCY_L3,
  SHOW_RESULT_L3
} from '../constants/actionTypes';

let initialState = {
  AdjMatrix: {nodes: [], edges: []},
  hideOutput: true
};

export function lab3reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VERTEX_COUNT_L3:
      return {
        hideOutput: true,
        AdjMatrix: {
          nodes: action.payload,
          edges: state.AdjMatrix.edges.filter(edge => {
            return (
              action.payload.includes(edge.from) &&
              action.payload.includes(edge.to)
            );
          })
        }
      };
    case CHANGE_ADJACENCY_L3:
      return {
        hideOutput: true,
        AdjMatrix: {
          nodes: state.AdjMatrix.nodes,
          edges: state.AdjMatrix.edges
            .filter(edge => edge.from !== action.payload.from)
            .concat(
              action.payload.to.map(item => {
                return {from: action.payload.from, to: item};
              })
            )
        }
      };
    case SHOW_RESULT_L3:
      return {
        ...state,
        hideOutput: false
      };
    default:
      return state;
  }
}
