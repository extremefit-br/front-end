import instance from './instance'


export function postDica(desc, usuarioId) {
    return instance.post('/Dicas', { desc })
}

export function getDica() {
    return instance.get('/Dicas');
}

export function deleteDica(id) {
    return instance.delete('/Dicas', { id })
}