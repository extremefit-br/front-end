import { combineReducers } from 'redux'
import { usuario } from './usuario'
import { empresa } from './empresa'


const reducer = combineReducers({
    usuario,
    empresa
})

export default reducer