import {createStore} from 'redux'
import {reducers} from "./reducers";
import {middlewares} from "./middlewarres";

export const store = createStore(reducers, middlewares)