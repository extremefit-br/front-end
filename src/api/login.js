import instance from './instance'


export function postLogin(email, senha) {
    return instance.post('/auth/login', { email, senha })
}

export function getEventos(id) {
    return instance.get('/Eventos', id);
}

export function deleteEmpresas(id) {
    return instance.delete('/Empresas', { id })
}