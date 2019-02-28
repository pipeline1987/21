import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk'
import { IApplicationState, rootReducer } from '.';

export default function configureStore(initialState: IApplicationState): Store<IApplicationState> {
    const composeEnhacers = composeWithDevTools({});

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhacers(applyMiddleware(thunk, immutableStateInvariantMiddleware()))
    );

    return store;
}