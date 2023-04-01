import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducer/cartReducer";
import {pizzaReducer} from "./reducer/pizzaReducer"

const rootReducer = combineReducers({
    pizzaReducer:pizzaReducer,
    cartReducer:cartReducer
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]


const initialState = {
    cartReducer:{
        cartItems: cartItems
    }
}
const middleware = [thunk]
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  export default store;