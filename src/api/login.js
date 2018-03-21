import instance from './instance'


export function postLogin(email, senha) {
    return instance.post('/auth/login', { email, senha })
        .then(response => console.log(response.data.accessToken))
        .catch(error => console.log('error is', error))
}