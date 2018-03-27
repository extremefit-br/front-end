import instance from './instance'


export function postEmpresas(nomeFantasia, razaoSocial, cnae, cnpj) {
        instance.post('/Empresas', { nomeFantasia, razaoSocial, cnae, cnpj })
            .then(response => console.log(response.data))
            .catch(error => console.log('error is', error))
}

export function getEmpresas() {
    return instance.get('/Empresas')
       .then(response => console.log(response.data))
        .catch(error => console.log('error is', error))
}

export function deleteEmpresas(id) {
    return instance.delete('/Empresas', { id })
}