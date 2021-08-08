import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const middleware = [thunk];
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)))