import { createStore, applyMiddleware } from 'redux'
import app from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(app, initialState,
        // Apply to store
        applyMiddleware(thunk)
    );
}