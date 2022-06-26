import React, {useState} from 'react';
import './App.css';
import Header from './component/header/Header';
import MemoizedProducts from './component/products/Products';
import ShoppingCartIcon from './component/shopping-cart-icon/ShoppingCartIcon';
import ShoppingCart from './component/shopping-cart/ShoppingCart';
import { ShoppingProvider } from "./contexts/ShoppingContext"

const App = () => {
    const [isShoppingCartShown, showShoppingCart] = useState<boolean>(false);

    return (
        <div>
            <Header/>
            <ShoppingProvider>
              <ShoppingCartIcon onClick={() => {
                  showShoppingCart(!isShoppingCartShown);
              }}/>
              {isShoppingCartShown ? <ShoppingCart/> : <MemoizedProducts/>}
            </ShoppingProvider>
        </div>
    );
};

export default App;
