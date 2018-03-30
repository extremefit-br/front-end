import instance from './instance'


export function postLogin(email, senha) {
    return instance.post('/auth/login', { email, senha })
        // .then(response => console.log(response.data.accessToken))
        // .then(response => console.log(response.data))
        // .catch(error => console.log('Erro: ', error))
}