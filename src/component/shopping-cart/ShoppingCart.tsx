import React, {FC, useContext} from 'react';
import './ShoppingCart.css';
import { ShoppingContext } from "../../contexts/ShoppingContext"
import {Product as ProductModel} from '../../model/product';
import { Types } from '../../redux/actionTypes';
import shoppingCartActions from '../../redux/actions';


const ShoppingCart: FC = (() => {
    
    const { state, dispatch } = useContext(ShoppingContext)
    const { products } = state

    const removeFromCart = (product: ProductModel) => {
      dispatch(shoppingCartActions.removeItemFromCart(product));
    }

    let arr_amount = products.map(product => product.quantity * product.price)
    let total_amount: number = arr_amount.reduce(function(a, b){
        return a + b;
    }, 0)

    const round = (d: number) => {
      return Math.round(d * 100) / 100
    }

    return (
        products.length === 0 ? null :
        <div className='shoppingWrapper'>
          <div className='shopping-cart-container'>
            {products.map(product => (
              <div className='cart-item-container'>
                <div className='item-img'>
                  <img src={product.image} alt='product'/>
                </div>
                <div className='item-attr'>
                  <b>Product name</b>
                  <p>{product.title}</p>
                </div>
                <div className='item-attr'>
                  <b>Short description</b>
                  <p className='truncate-overflow'>{product.description}</p>
                </div>
                 <div className='item-attr'>
                  <b>Qty</b>
                  <p>{product.quantity}</p>
                </div>
                 <div className='item-attr'>
                  <b>Price per 1pc</b>
                  <p>{product.price}</p>
                </div>
                 <div className='item-attr'>
                  <b>Line total</b>
                  <p>{`$${round(product.quantity * product.price)}`}</p>
                </div>
                <div className='item-img'>
                  <a onClick={() => {
                      removeFromCart(product);
                  }}>Remove item</a>
                </div>
              </div>             
            ))}
            <div className='shopping-cart-total'>
              <h3>Total amount for payment</h3>
              <h3>{`$${round(total_amount)}`}</h3>
            </div>
          </div>
        </div>
    );
});

export default ShoppingCart;
