import {
    ADD_EMPRESA,
    GET_EMPRESA,
    DELETE_EMPRESA
} from '../action/empresa.js'


export function empresa(estadoAtual = false, action) {
    switch (action.type) {
        case ADD_EMPRESA:
            return true
        case GET_EMPRESA:
            return action
        case DELETE_EMPRESA:
            return false
        default:
            return estadoAtual
    }
}