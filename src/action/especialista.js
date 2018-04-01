import { postDicas, getDicas, deleteDicas } from "../api/dicas.js"
export const ADD_ESPECIALISTA = 'ADD_ESPECIALISTA'
export const GET_ESPECIALISTA = 'GET_ESPECIALISTA'
export const DELETE_ESPECIALISTA = 'DELETE_ESPECIALISTA'

export function addDica() {
    return dispatch => {
        postDicas()
            .then(response => dispatch({
                type: ADD_ESPECIALISTA
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
                type: GET_ESPECIALISTA
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
                type: DELETE_ESPECIALISTA
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}