import { Product, User, UserName } from "../model/product";

export interface ShoppingCartState {
    loggedInUser : UserName;
    counter : number;
    products : Product[];
    categories : string[];
    cartItems : number[];
}

export const initialSoppingCartState : ShoppingCartState  = {    
    loggedInUser : {firstname:'', lastname:''},
    counter : 0,
    products : [],
    categories : [],
    cartItems : []
}