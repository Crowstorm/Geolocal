import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from './reducers'

//import renderedDrugsReducer2 from '../reducers/levels';

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    let store = createStore(reducers,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )
    return store;
}
