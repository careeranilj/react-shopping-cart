import React, {FC, useReducer} from 'react';
import './Product.css';
import {Product as ProductModel} from '../../model/product';
import { ShoppingContext } from "../../contexts/ShoppingContext"
import { initialSoppingCartState } from '../../redux/shoppingCartState';
import { shoppingCartReducer } from '../../redux/reducers/shoppingCart';
import shoppingCartActions from '../../redux/actions';
import { Types } from '../../reducers/ShoppingReducer';

interface ProductProps {
    product: ProductModel;
}

const Product: FC<ProductProps> = (({product}) => {
    // const [state, dispatch] = useReducer(shoppingCartReducer, initialSoppingCartState);
    const { dispatch } = React.useContext(ShoppingContext)

    const addToCart = (product: ProductModel) => {
        dispatch({ type: Types.ADD_TO_CART, payload: product })
        // dispatch({ type: Types.ADD_TO_CART, payload: {itemId : product.id} });
        // dispatch(shoppingCartActions.addItemToCart(product.id));
    };

    return (
        <div >
            <figure className='product blue'>
                <div>
                    <img src={product.image} alt='product'/>
                    <div className='price'>{product.price}</div>
                </div>
                <figcaption>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <a onClick={() => {
                        addToCart(product);
                    }}>Add to Cart</a>
                </figcaption>
            </figure>
        </div>
    );
});

export default Product;
