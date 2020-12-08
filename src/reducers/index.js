import { combineReducers } from 'redux';
import auth from './auth'
import notes from './notes'
import 'semantic-ui-css/semantic.min.css'


export default combineReducers ({
    auth, 
    notes 
})