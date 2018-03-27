import { postLogin } from "../api/login.js";
export const LOGA_USUARIO = 'LOGA_USUARIO'
export const DESLOGA_USUARIO = 'DESLOGA_USUARIO'


export function logaUsuario() {
    console.log("12345")
    return dispatch => {
        postLogin()
            .then(response => dispatch({
                type: LOGA_USUARIO,
                token: response.data.token
            }))
        .catch(error => {
            console.log('Ocorreu um erro', error)
        })
    }
}

export function deslogaUsuario() {
    return {
        type: DESLOGA_USUARIO,
    }
}