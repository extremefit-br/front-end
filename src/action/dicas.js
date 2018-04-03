import { postDicas, getDicas, deleteDicas } from "../api/dicas.js"
export const ADD_DICA = 'ADD_DICA'
export const GET_DICA = 'GET_DICA'
export const DELETE_DICA = 'DELETE_DICA'

export function addDica(dicas) {
    return dispatch => {
        postDicas(dicas)
            .then(response => dispatch({
                type: ADD_DICA
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function getDica() {
    return dispatch => {
        getDicas()
            .then(response => dispatch({
                type: GET_DICA,
                info: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function deleteDica() {
    return dispatch => {
        deleteDicas()
            .then(response => dispatch({
                type: DELETE_DICA
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}