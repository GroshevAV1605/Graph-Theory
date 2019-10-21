import {
    CHANGE_ADJACENCY,
    CHANGE_VERTEX_COUNT,
    SHOW_RESULT
} from "../constants/actionTypes";

export function ChangeAdjacency(payload) {
    return { type: CHANGE_ADJACENCY, payload };
}

export function ChangeVertexCount(payload) {
    return { type: CHANGE_VERTEX_COUNT, payload };
}

export function showResult() {
    return { type: SHOW_RESULT };
}
