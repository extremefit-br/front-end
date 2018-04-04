import instance from './instance'


export function postEventos(evento) {
    return instance.post('/Eventos', evento)
}

export function getEventos() {
    return instance.get('/Eventos')
}

export function deleteEventos(id) {
    console.log('cheguei no api de delete: ' + id)
    return instance.delete('/Eventos', { id })
}