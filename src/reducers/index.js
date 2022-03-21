// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import deleteRed from './delete';

const rootReducer = combineReducers({ user, wallet, deleteRed });

export default rootReducer;
