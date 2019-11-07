import {
  CHANGE_FIRST_ADJACENCY,
  CHANGE_SECOND_ADJACENCY,
  CHANGE_FIRST_VERTEX_COUNT,
  CHANGE_SECOND_VERTEX_COUNT,
  SHOW_RESULT_L2
} from '../constants/actionTypes';

let initialState = {
  FirstAdjMatrix: {nodes: [], edges: []},
  SecondAdjMatrix: {nodes: [], edges: []},
  hideOutput: true
};

export function lab2reducer(state = initialState, action) {
  //action.payload = {from: num, to: []}
  switch (action.type) {
    case CHANGE_FIRST_ADJACENCY:
      return {
        ...state,
        hideOutput: true,
        FirstAdjMatrix: {
          nodes: state.FirstAdjMatrix.nodes,
          edges: state.FirstAdjMatrix.edges
            .filter(edge => edge.from !== action.payload.from)
            .concat(
              action.payload.to.map(item => {
                return {from: action.payload.from, to: item};
              })
            )
        }
      };

    case CHANGE_SECOND_ADJACENCY:
      return {
        ...state,
        hideOutput: true,
        SecondAdjMatrix: {
          nodes: state.SecondAdjMatrix.nodes,
          edges: state.SecondAdjMatrix.edges
            .filter(edge => edge.from !== action.payload.from)
            .concat(
              action.payload.to.map(item => {
                return {from: action.payload.from, to: item};
              })
            )
        }
      };

    case CHANGE_FIRST_VERTEX_COUNT:
      return {
        ...state,
        hideOutput: true,
        FirstAdjMatrix: {
          nodes: action.payload,
          edges: state.FirstAdjMatrix.edges.filter(edge => {
            return (
              action.payload.includes(edge.from) &&
              action.payload.includes(edge.to)
            );
          })
        }
      };

    case CHANGE_SECOND_VERTEX_COUNT:
      return {
        ...state,
        hideOutput: true,
        SecondAdjMatrix: {
          nodes: action.payload,
          edges: state.SecondAdjMatrix.edges.filter(edge => {
            return (
              action.payload.includes(edge.from) &&
              action.payload.includes(edge.to)
            );
          })
        }
      };

    case SHOW_RESULT_L2:
      return {
        ...state,
        hideOutput: false
      };

    default:
      return state;
  }
}
