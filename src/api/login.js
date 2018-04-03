import instance from './instance'
import axios from 'axios'


export function postLogin(email, senha) {
    return instance.post('/auth/login', { email, senha })
        .then(response => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
            return response
        })
        // .then(response => console.log(response.data.accessToken))
        // .then(response => console.log(response.data))
        // .catch(error => console.log('Erro: ', error))
}