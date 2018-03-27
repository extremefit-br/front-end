import instance from './instance'


export function postDica(desc, usuarioId) {
    return instance.post('/Dicas', { desc })
        // .then(response => console.log(response.data.accessToken))
        // .catch(error => console.log('error is', error))
}

export function getDica(id) {
    // console.log(instance.get('/Dicas'))
    return instance.get('/Dicas', { id })
        .then(response => response.data)
        .catch(error => console.log('error is', error))
}

export function deleteDica(id) {
    return instance.delete('/Dicas', { id })
}