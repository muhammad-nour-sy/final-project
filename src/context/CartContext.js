import React, {createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
export const CartContext = createContext([]);

export function CartProvider(props) {
    const [state, dispatch] = useReducer(cartReducer, {cartItems:[]},()=>{
        const localData=localStorage.getItem('cartItems');
        return localData? {cartItems:JSON.parse(localData)}:{cartItems:[]};
    })

    const cartTotal = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    ).toFixed(2);
    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
    },[state.cartItems])

    

    

    

    return (
        <CartContext.Provider
            value={{
                cartItems: state.cartItems,
                cartTotal,
                dispatch
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;
