import * as React from "react";
import { shoppingCartReducer } from "../redux/reducers/shoppingCart";
import { initialSoppingCartState, ShoppingCartState } from "../redux/shoppingCartState";
import { ShoppingCartActionType } from "../redux/actions";

const ShoppingContext = React.createContext<{
  state: ShoppingCartState;
  dispatch: React.Dispatch<ShoppingCartActionType>;
}>({
  state: initialSoppingCartState,
  dispatch: () => null,
});

const ShoppingProvider: React.FC = ({ children }) => {

  const [state, dispatch] = React.useReducer(shoppingCartReducer, initialSoppingCartState);

  return (
    <ShoppingContext.Provider value={{state, dispatch}}>
      {children}
    </ShoppingContext.Provider>
  )
}

export { ShoppingContext, ShoppingProvider };


