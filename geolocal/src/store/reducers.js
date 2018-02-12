import formReducer from '../reducers/formReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    form: formReducer
})