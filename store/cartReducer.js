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

export default function cartReducer(state=[],action) {
        switch(action.type) {
        case CART_ADDITEM:
            const existingItem = state.find((cartItem) => cartItem?.productId === action.payload.productId)
            if(existingItem) {
                return state?.map((cartItem)=> {
                    if(cartItem?.productId === existingItem?.productId) {
                        return {
                            ...cartItem,
                            quantity : cartItem.quantity + 1
                        }
                    }
                    return cartItem;
                })
            }
            else {
                return [...state,{...action.payload, quantity : 1}]
            }
        case CART_REMOVEITEM:
            return state.filter((cartItem)=>{
                return cartItem.productId !== action.payload.productId
            })
        case CART_INCREASE_ITEMQUANTITY :
            return state.map((cartItem)=> {
                    if(cartItem.productId === action.payload.productId){
                        return {...cartItem,quantity : cartItem.quantity + 1}
                    }
                    return cartItem
                    })
        case CART_DECREASE_ITEMQUANTITY:
            return state.map((cartItem) => {
                    if (cartItem.productId === action.payload.productId) {
                        return { ...cartItem, quantity: cartItem.quantity -1 }
                    }
                    return cartItem
                }).filter((cartItem) => cartItem.quantity > 0)
            
        default:
            return state;
    }
} 