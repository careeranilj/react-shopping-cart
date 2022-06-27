import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';

describe('product component', () => {
   it('renders product information properly', () => {

       const dummyProduct = {
            id: 1,
            title: 'Title',
            category: 'Cateory ',
            description: 'test description',
            price: 99,
            quantity: 0,
            image:'https://dummyimage.com/dummy.jpg'           
       };

       const { getByText, getByRole } = render(<Product product={dummyProduct} />);

       const productImage = getByRole('img') as HTMLImageElement;
       expect(productImage.src).toEqual(dummyProduct.image);
       expect(getByText(dummyProduct.title)).toBeInTheDocument();
       expect(getByText(dummyProduct.description)).toBeInTheDocument();
       expect(getByText(`${dummyProduct.price.toString()}`)).toBeInTheDocument();
   });
});
