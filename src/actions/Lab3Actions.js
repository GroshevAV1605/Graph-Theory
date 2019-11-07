import {
  CHANGE_ADJACENCY_L3,
  CHANGE_VERTEX_COUNT_L3,
  SHOW_RESULT_L3
} from '../constants/actionTypes';

export function ChangeAdjacency(payload) {
  return {type: CHANGE_ADJACENCY_L3, payload};
}

export function ChangeVertexes(payload) {
  return {type: CHANGE_VERTEX_COUNT_L3, payload};
}

export function showResult() {
  return {type: SHOW_RESULT_L3};
}
