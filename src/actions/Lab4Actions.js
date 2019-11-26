import {
  CHANGE_ADJACENCY_L4,
  CHANGE_VERTEX_COUNT_L4,
  SHOW_RESULT_L4
} from '../constants/actionTypes';

export function ChangeAdjacency(payload) {
  return {type: CHANGE_ADJACENCY_L4, payload};
}

export function ChangeVertexes(payload) {
  return {type: CHANGE_VERTEX_COUNT_L4, payload};
}

export function showResult() {
  return {type: SHOW_RESULT_L4};
}
