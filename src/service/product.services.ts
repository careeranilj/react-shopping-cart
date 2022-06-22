import {Product, User} from '../model/product';

export function getProducts(): Promise<Product[]>{
    return fetch('https://fakestoreapi.com/products')
                .then(res=>res.json());
}
export function isUserValid(email:string, password:string): Promise<User>{

    return fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>{
                return json.find((user:User) => (user.email === email && user.password == password))
            });
            
}