import instance from './instance'


export function postDicas(dica) {
    return instance.post('/Dicas', dica)
}

export function getDicas() {
    return instance.get('/Dicas')
}

export function deleteDicas(id) {
    return instance.delete('/Dicas', { id })
}