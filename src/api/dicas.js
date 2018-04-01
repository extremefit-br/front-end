import instance from './instance'


export function postDicas(desc, usuarioId) {
    return instance.post('/Dicas', { desc })
        // .then(response => console.log(response.data.accessToken))
        // .catch(error => console.log('error is', error))
}

export function getDicas(id) {
    // console.log(instance.get('/Dicas'))
    return instance.get('/Dicas', { id })
        .then(response => response.data)
        .catch(error => console.log('error is', error))
}

export function deleteDicas(id) {
    return instance.delete('/Dicas', { id })
}