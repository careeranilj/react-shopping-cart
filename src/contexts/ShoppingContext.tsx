import * as React from "react"
import { ShoppingReducer, Actions, State } from '../reducers/ShoppingReducer';
import { Product } from '../model/product';
import { shoppingCartReducer } from "../redux/reducers/shoppingCart";
import { initialSoppingCartState } from "../redux/shoppingCartState";
import shoppingCartStore from "../redux/store";
import { Provider } from 'react-redux';

const initialState = {
 counter: 0,
 products: []
}

const ShoppingContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const ShoppingProvider: React.FC = ({ children }) => {

  // const [state, dispatch] = React.useReducer(shoppingCartReducer, initialSoppingCartState);
  const [state, dispatch] = React.useReducer(ShoppingReducer, initialState);
// const context = React.createContext('');

  return (
    <ShoppingContext.Provider value={{state, dispatch}}>
    {/* <Provider store={shoppingCartStore}> */}
      {children}
    {/* </Provider> */}
    </ShoppingContext.Provider>
  )
}

export { ShoppingContext, ShoppingProvider };


