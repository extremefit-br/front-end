import {
    ADD_EVENTO,
    GET_EVENTO,
    DELETE_EVENTO
} from '../action/evento.js'

export function evento(estadoAtual = [], action) {
    switch (action.type) {
        case ADD_EVENTO:
            return []
        case GET_EVENTO:
            return [
                ...action.info
            ]
        case DELETE_EVENTO:
            return false
        default:
            return estadoAtual
    }
}