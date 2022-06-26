import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'

const shoppingCartStore = configureStore({ reducer: rootReducer })
export default shoppingCartStore;