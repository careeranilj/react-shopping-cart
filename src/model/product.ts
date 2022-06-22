export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  image:string;
}
export interface User {
  email:string;
  username:string;
  password:string;
  name:{
      firstname:string;
      lastname:string;
  }
}

export interface CategoryProps{
  handleChange:(categories: string[]) => void;
}
