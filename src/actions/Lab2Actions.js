import {
  CHANGE_FIRST_ADJACENCY,
  CHANGE_SECOND_ADJACENCY,
  CHANGE_FIRST_VERTEX_COUNT,
  CHANGE_SECOND_VERTEX_COUNT,
  SHOW_RESULT
} from '../constants/actionTypes';

export function ChangeFirstAdjacency(payload) {
  return {type: CHANGE_FIRST_ADJACENCY, payload};
}

export function ChangeSecondAdjacency(payload) {
  return {type: CHANGE_SECOND_ADJACENCY, payload};
}

export function ChangeFirstVertexCount(payload) {
  return {type: CHANGE_FIRST_VERTEX_COUNT, payload};
}

export function ChangeSecondVertexCount(payload) {
  return {type: CHANGE_SECOND_VERTEX_COUNT, payload};
}

export function showResult() {
  return {type: SHOW_RESULT};
}
