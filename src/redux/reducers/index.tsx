import { combineReducers } from "redux";
import {shoppingCartReducer} from "./shoppingCart";

const rootReducer = combineReducers({ shoppingCartReducer });
export default rootReducer;