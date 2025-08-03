import { produce } from "immer"

export const CART_ADDITEM = "cart/addItem"
export const CART_REMOVEITEM = "cart/removeItem"
export const CART_INCREASE_ITEMQUANTITY = "cart/increaseItemQuantity"
export const CART_DECREASE_ITEMQUANTITY = "cart/decreaseItemQuantity"

 export function decreaseCartItemQuantity (productId) {
    return {
        type : CART_DECREASE_ITEMQUANTITY,
        payload : { productId}
    }
}

 export function increaseCartItemQuantity (productId) {
    console.log("productId",productId)
    return {
        type : CART_INCREASE_ITEMQUANTITY,
        payload : { productId}
    }
}


export function addCartItem (productData) {
    return {
        type : CART_ADDITEM,
        payload :  productData
    }
}

export function removeCartItem (productId) {
    return {
        type : CART_REMOVEITEM,
        payload : {productId}

    }
}

export default function cartReducer(originalState=[],action) {
    //produce has first arg as original state and then second argument has copy state of original state
    return produce(originalState,(state)=>{
        const existingItemIndex = state.findIndex((cartItem) => cartItem?.productId === action.payload.productId)
        switch(action.type) {
        case CART_ADDITEM:
            if(existingItemIndex !== -1) {
                state[existingItemIndex].quantity +=1 ;
                break;
            }
            else {
                state.push({...action.payload, quantity : 1})
                break;
            }
        case CART_REMOVEITEM:
            state.splice
            break;

        case CART_INCREASE_ITEMQUANTITY :
            state[existingItemIndex].quantity +=1;
            break;
        case CART_DECREASE_ITEMQUANTITY:
            state[existingItemIndex].quantity -=1;
            if(state[existingItemIndex].quantity === 0) {
                 state.splice(existingItemIndex,1)
            }
            break;
            
        default:
            return state;
    }
    return state
    })
} 