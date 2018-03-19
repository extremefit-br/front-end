import instance from './instance'


export function postEmpresas(nomeFantasia, razaoSocial, cnae, cnpj) {
    return instance.post('/Empresas', { nomeFantasia, razaoSocial, cnae, cnpj })
}

export function getEmpresas(id) {
    return instance.get('/Empresas', id);
}

export function deleteEmpresas(id) {
    return instance.delete('/Empresas', { id })
}