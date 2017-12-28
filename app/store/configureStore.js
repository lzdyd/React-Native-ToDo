import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

// TODO: find logger for React Native
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );

  return store;
}
