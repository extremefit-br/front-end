import {
    ADD_DICA,
    GET_DICA,
    DELETE_DICA
} from '../action/dicas.js'

export function usuario(estadoAtual = false, action) {
    switch (action.type) {
        case ADD_DICA:
            return true
        case GET_DICA:
            return action
        case DELETE_DICA:
            return false
        default:
            return estadoAtual
    }
}