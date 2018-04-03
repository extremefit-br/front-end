import {
    ADD_DICA,
    GET_DICA,
    DELETE_DICA
} from '../action/dicas.js'

export function usuario(estadoAtual = [], action) {
    switch (action.type) {
        case ADD_DICA:
            return []
        case GET_DICA:
            return [
                ...action.info
            ]
        case DELETE_DICA:
            return false
        default:
            return estadoAtual
    }
}