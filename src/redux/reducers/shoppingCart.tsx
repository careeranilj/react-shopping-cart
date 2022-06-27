import { Reducer } from "redux";
import { ShoppingCartActionType } from "../actions";
import { Types } from "../actionTypes";
import { initialSoppingCartState, ShoppingCartState } from "../shoppingCartState";

export const shoppingCartReducer : Reducer<ShoppingCartState, ShoppingCartActionType> = (state = initialSoppingCartState, action: any) => {
  switch (action.type) {
    case Types.ADD_TO_CART: 
            let existed_item = state.products.find(item=> action.payload.id === item.id)
            let addedItem = action.payload
            if(existed_item)
            {
                existed_item.quantity += 1 
                return{
                    ...state,
                    counter: state.counter+1
                }
            }
            else {
                addedItem.quantity = 1;
                return {
                    ...state,
                    products: [...state.products, addedItem],
                    counter : state.counter+1
                }
                
            }
    case Types.REMOVE_FROM_CART: 
        return {
            ...state,
            counter: state.counter - action.payload.quantity, 
            products: [...state.products.filter(product => product.id !== action.payload.id)] 
        }
    case Types.LOGIN: {
              return {
                ...state,
                loggedInUser : action.payload,
              };
            }
    case Types.LOGOUT: {
              return {
                ...state,
                loggedInUser : {firstname:'', lastname : ''}
              };
            }
    case Types.FETCH_LOGGED_IN_USER: {
              return state;
            }
    default:
      return state;
  }
}