import { Product, UserName } from "../model/product";
import { Types} from "./actionTypes";
import { Action } from 'redux';


interface LoginAction extends Action {
    type : Types.LOGIN;
    payload: string;
}

interface LogoutAction extends Action {
    type : Types.LOGOUT;
}

interface FetchLoggedInUserAction extends Action {
    type : Types.FETCH_LOGGED_IN_USER;
}

interface AddToCartAction extends Action {
    type : Types.ADD_TO_CART;
    payload: Product;
}

interface RemoveFromCartAction extends Action {
    type : Types.REMOVE_FROM_CART;
    payload: Product;
}

interface FetchItemsFromCartAction extends Action {
    type : Types.FETCH_ITEMS_IN_CART;
}

export type ShoppingCartActionType = LoginAction | LogoutAction | FetchLoggedInUserAction| AddToCartAction | RemoveFromCartAction | FetchItemsFromCartAction;

const storeLoginDetails = (data:string) : LoginAction=> ({type:Types.LOGIN, payload:data});
const clearLoginDetails = () => ({type:Types.LOGOUT});
const fetchLoginDetails = () => ({type:Types.FETCH_LOGGED_IN_USER});
const addItemToCart = (product: Product): AddToCartAction => ({ type: Types.ADD_TO_CART, payload: product });
const removeItemFromCart = (product:Product): RemoveFromCartAction => ({type:Types.REMOVE_FROM_CART, payload:product});
const fetchCartItems = () => ({type:Types.FETCH_ITEMS_IN_CART});

const shoppingCartActions = {storeLoginDetails, clearLoginDetails,fetchLoginDetails, addItemToCart, removeItemFromCart, fetchCartItems};

export default shoppingCartActions
