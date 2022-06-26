import { combineReducers } from "redux";
import {loginReducer} from "./login";
import {shoppingCartReducer} from "./shoppingCart";

const rootReducer = combineReducers({ loginReducer, shoppingCartReducer });
export default rootReducer;