import {
  CHANGE_FIRST_ADJACENCY,
  CHANGE_SECOND_ADJACENCY,
  CHANGE_FIRST_VERTEX_COUNT,
  CHANGE_SECOND_VERTEX_COUNT,
  SHOW_RESULT
} from '../constants/actionTypes';

let initialState = {
  FirstAdjMatrix: [],
  SecondAdjMatrix: [],
  hideOutput: true
};

export function lab2reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIRST_ADJACENCY:
      return {
        ...state,
        FirstAdjMatrix: state.FirstAdjMatrix.map((item, i) =>
          item.map((jtem, j) => {
            return action.payload.j === j && action.payload.i === i
              ? action.payload.value
              : jtem;
          })
        )
      };

    case CHANGE_SECOND_ADJACENCY:
      return {
        ...state,
        SecondAdjMatrix: state.SecondAdjMatrix.map((item, i) =>
          item.map((jtem, j) => {
            return action.payload.j === j && action.payload.i === i
              ? action.payload.value
              : jtem;
          })
        )
      };

    case CHANGE_FIRST_VERTEX_COUNT:
      let newFirstMatrix = state.FirstAdjMatrix.map(arr => arr.slice());

      while (newFirstMatrix.length < action.payload) {
        newFirstMatrix.push(new Array(action.payload).fill(''));
      }

      newFirstMatrix.length = action.payload || 0;
      newFirstMatrix = newFirstMatrix.map(arr => arr.slice(0, action.payload));

      return {
        ...state,
        hideOutput: true,
        FirstAdjMatrix: newFirstMatrix
      };

    case CHANGE_SECOND_VERTEX_COUNT:
      let newSecondMatrix = state.SecondAdjMatrix.map(arr => arr.slice());

      while (newSecondMatrix.length < action.payload) {
        newSecondMatrix.push(new Array(action.payload).fill(''));
      }

      newSecondMatrix.length = action.payload || 0;
      newSecondMatrix = newSecondMatrix.map(arr =>
        arr.slice(0, action.payload)
      );

      return {
        ...state,
        hideOutput: true,
        SecondAdjMatrix: newSecondMatrix
      };

    case SHOW_RESULT:
      return {
        ...state,
        hideOutput: false
      };

    default:
      return state;
  }
}
