import {
    ADD_ESPECIALISTA,
    GET_ESPECIALISTA,
    DELETE_ESPECIALISTA
} from '../action/especialista.js'

export function usuario(estadoAtual = [], action) {
    switch (action.type) {
        case ADD_ESPECIALISTA:
            return true
        case GET_ESPECIALISTA:
            return [
                ...action.info
            ]
        case DELETE_ESPECIALISTA:
            return false
        default:
            return estadoAtual
    }
}