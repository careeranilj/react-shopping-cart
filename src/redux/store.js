import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'
import { shoppingCartReducer } from './reducers/shoppingCart';

const shoppingCartStore = configureStore({ reducer: shoppingCartReducer })
export default shoppingCartStore;