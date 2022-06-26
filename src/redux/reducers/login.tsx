import { Reducer } from "redux";
import { ShoppingCartActionType } from "../actions";
import { Types } from "../actionTypes";
import { initialSoppingCartState, ShoppingCartState } from "../shoppingCartState";

export const loginReducer: Reducer<ShoppingCartState, ShoppingCartActionType> = (state = initialSoppingCartState, action) => {
  switch (action.type) {
    case Types.LOGIN: {
    const { userName } = action.payload;
      return {
        ...state,
        loggedInUser : userName
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