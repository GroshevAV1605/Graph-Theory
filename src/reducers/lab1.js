import {
  CHANGE_ADJACENCY,
  CHANGE_VERTEX_COUNT,
  SHOW_RESULT_L1
} from '../constants/actionTypes';

const initialState = {
  adjacencyList: [' ', ' '],
  hideOutput: true
};

export function lab1reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADJACENCY:
      return {
        hideOutput: true,
        adjacencyList: state.adjacencyList.map((item, index) => {
          return index === action.payload.index ? action.payload.value : item;
        })
      };

    case CHANGE_VERTEX_COUNT:
      let newAdjList = [...state.adjacencyList];
      while (newAdjList.length < action.payload) {
        newAdjList.push('');
      }
      newAdjList.length = action.payload || 0;
      return {
        hideOutput: true,
        adjacencyList: newAdjList
      };

    case SHOW_RESULT_L1:
      return {
        ...state,
        hideOutput: false
      };

    default:
      return state;
  }
}
