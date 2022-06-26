import { UserName } from "../model/product";
import { Types} from "./actionTypes";
import { Action } from 'redux';

export const LOGIN:string = 'LOGIN';
export const LOGOUT:string = 'LOGOUT';
export const FETCH_LOGGED_IN_USER:string = 'FETCH_LOGGED_IN_USER';
export const ADD_TO_CART:string = 'ADD_TO_CARTADD_TO_CART';
export const REMOVE_FROM_CART:string = 'REMOVE_FROM_CARTREMOVE_FROM_CART';
export const FETCH_ITEMS_IN_CART:string = 'FETCH_ITEMS_IN_CARTFETCH_ITEMS_IN_CART';

interface LoginAction extends Action {
    type : Types.LOGIN;
    payload: {userName: UserName};
}

interface LogoutAction extends Action {
    type : Types.LOGOUT;
}

interface FetchLoggedInUserAction extends Action {
    type : Types.FETCH_LOGGED_IN_USER;
}

interface AddToCartAction extends Action {
    type : Types.ADD_TO_CART;
    payload: {itemId: number};
}

interface RemoveFromCartAction extends Action {
    type : Types.REMOVE_FROM_CART;
    payload: {itemId: number};
}

interface FetchItemsFromCartAction extends Action {
    type : Types.FETCH_ITEMS_IN_CART;
}

export type ShoppingCartActionType = LoginAction | LogoutAction | FetchLoggedInUserAction| AddToCartAction | RemoveFromCartAction | FetchItemsFromCartAction;

const storeLoginDetails = (data:any) => ({type:Types.LOGIN, payload:{ImageData}});
const clearLoginDetails = () => ({type:Types.LOGOUT});
const fetchLoginDetails = () => ({type:Types.FETCH_LOGGED_IN_USER});
const addItemToCart = (itemId:number) => ({type:Types.ADD_TO_CART, payload:{itemId:itemId}});
const removeItemFromCart = (itemId:number) => ({type:Types.REMOVE_FROM_CART, payload:{itemId:itemId}});
const fetchCartItems = () => ({type:Types.FETCH_ITEMS_IN_CART});

const shoppingCartActions = {storeLoginDetails, clearLoginDetails,fetchLoginDetails, addItemToCart, removeItemFromCart, fetchCartItems};

export default shoppingCartActions
