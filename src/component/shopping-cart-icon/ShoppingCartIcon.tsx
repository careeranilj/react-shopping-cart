import React, {FC, useEffect} from 'react';
import './ShoppingCartIcon.css';
import CartIcon from '../../assets/shopping-cart.svg';
import { ShoppingContext } from "../../contexts/ShoppingContext"
import {Product as ProductModel} from '../../model/product';
import Login from '../login/Login'; 

interface ShoppingCartIconProps {
    onClick: () => void;
}

const ShoppingCartIcon: FC<ShoppingCartIconProps> = (({onClick}) => {

    const { state } = React.useContext(ShoppingContext)

    return (
        <div className='icon-container' >
            
            <Login/> &nbsp;&nbsp;
            <img className='shopping-cart-icon' src={CartIcon} alt='shopping-cart-icon' onClick={(onClick)}/>
                <span className='number-of-items-in-cart'>{state.counter}</span>
        </div>
    );
});

export default ShoppingCartIcon;
