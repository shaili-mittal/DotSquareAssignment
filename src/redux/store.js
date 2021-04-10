import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ituneReducer from './ituneReducer'

const store = createStore(ituneReducer,applyMiddleware(thunk));

export default store;