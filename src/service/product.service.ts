import {Product} from '../model/product';

export class ProductService {

    getProducts(): Promise<Product[]> {
        return fetch('https://fakestoreapi.com/products')
                    .then(res=>res.json());
    }
}