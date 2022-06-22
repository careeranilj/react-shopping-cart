import React, {FC} from 'react';
import './Product.css';
import {Product as ProductModel} from '../../model/product';
import { ShoppingContext } from "../../contexts/ShoppingContext"
import { Types } from "../../reducers/ShoppingReducer"

interface ProductProps {
    product: ProductModel;
}

const Product: FC<ProductProps> = (({product}) => {

    const { dispatch } = React.useContext(ShoppingContext)

    const addToCart = (product: ProductModel) => {
      dispatch({ type: Types.ADD_TO_CART, payload: product })
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
