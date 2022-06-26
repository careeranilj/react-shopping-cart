import {Product, User} from '../model/product';

export const getProducts = ():Promise<Product[]> => {
    return fetch('https://fakestoreapi.com/products')
                .then(res=>res.json());
}
export const getcategories = (): Promise<String[]> => {
    return fetch('https://fakestoreapi.com/products/categories')
                .then(res=>res.json());
}
export const isUserValid = (email:string, password:string): Promise<User> => {
    return fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>{
                return json.find((user:User) => (user.email === email && user.password == password))
            });
            
}