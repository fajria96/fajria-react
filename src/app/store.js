import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import counterReducer from "./features/Counter/reducer"

let rootReducers= combineReducers({
    counter : counterReducer
});

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhanchers(applyMiddleware(thunk)));
export default store;