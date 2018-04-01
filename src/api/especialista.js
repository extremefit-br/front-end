import instance from './instance'


export function postEspecialista() {
    return instance.post('/Dicas', { })
    // .then(response => console.log(response.data.accessToken))
    // .catch(error => console.log('error is', error))
}

export function getEspecialista(id) {
    // console.log(instance.get('/Dicas'))
    return instance.get('/Dicas', { id })
        .then(response => response.data)
        .catch(error => console.log('error is', error))
}

export function deleteEspecialista(id) {
    return instance.delete('/Dicas', { id })
}