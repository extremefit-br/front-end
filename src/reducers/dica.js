import {
    ADD_DICA,
    GET_DICA,
    DELETE_DICA
} from '../action/dica.js'

export function dica(estadoAtual = [], action) {
    switch (action.type) {
        case ADD_DICA:
            return []
        case GET_DICA:
            console.log('chamou')
            return [
                ...action.info
            ]
        case DELETE_DICA:
            return false
        default:
            return estadoAtual
    }
}