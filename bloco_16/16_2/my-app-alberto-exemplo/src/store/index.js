import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers'; //pode importar so o diretorio se for do arquivo index.js

const rootReducer = combineReducers({ 
  listReducer
});

const store = createStore(rootReducer);

export default store;