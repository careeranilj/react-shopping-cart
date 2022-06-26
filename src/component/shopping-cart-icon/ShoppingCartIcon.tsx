import React, {FC, useEffect, useReducer} from 'react';
import './ShoppingCartIcon.css';
import CartIcon from '../../assets/shopping-cart.svg';
import { ShoppingContext } from "../../contexts/ShoppingContext"
import {Product as ProductModel} from '../../model/product';
import {MemoizedLogin} from '../login/Login'; 
import { initialSoppingCartState } from '../../redux/shoppingCartState';
import rootReducer from '../../redux/reducers';
import { shoppingCartReducer } from '../../redux/reducers/shoppingCart';

interface ShoppingCartIconProps {
    onClick: () => void;
}

const ShoppingCartIcon: FC<ShoppingCartIconProps> = (({onClick}) => {

    const { state } = React.useContext(ShoppingContext)
    // const [state, dispatch] = useReducer(shoppingCartReducer, initialSoppingCartState);

    return (
        <div className='icon-container' >
            
            <MemoizedLogin/> &nbsp;&nbsp;
            <img className='shopping-cart-icon' src={CartIcon} alt='shopping-cart-icon' onClick={(onClick)}/>
                <span className='number-of-items-in-cart'>{state.counter}</span>
        </div>
    );
});

export default ShoppingCartIcon;
