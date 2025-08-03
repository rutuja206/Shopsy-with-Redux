import { combineReducers, createStore } from 'redux';
import { productList } from './productList';
import productsReducer from './productsSlice';
import cartReducer, { addCartItem, CART_ADDITEM, CART_INCREASE_ITEMQUANTITY, decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from './cartSlice';
import wishListReducer, { addWishlistItem } from './wishListSlice';
//combine reducers 
//action creators

// let initialState = {
//     products : productList,
//     cartItems : [],
//     wishList : []
// }

// const CART_ADDITEM = "cart/addItem"
// const CART_REMOVEITEM = "cart/removeItem"
// const CART_INCREASE_ITEMQUANTITY = "cart/increaseItemQuantity"
// const CART_DECREASE_ITEMQUANTITY = "cart/decreaseItemQuantity"

// const WISHLIST_ADD_ITEM = "wishList/addItem"
// const WISHLIST_REMOVE_ITEM = "wishList/removeItem"



// function reducer(state = initialState,action) {
//     switch(action.type) {
//         case CART_ADDITEM:
//             return {...state,cartItems : [...state.cartItems,action.payload]}
//         case CART_REMOVEITEM:
//             return {...state,cartItems : state.cartItems.filter((cartItem)=>{
//                 return cartItem.productId !== action.payload.productId
//             })}
//         case CART_INCREASE_ITEMQUANTITY :
//             return {
//                 ...state,
//                 cartItems : state.cartItems.map((cartItem)=> {
//                     if(cartItem.productId === action.payload.productId){
//                         return {...cartItem,quantity : cartItem.quantity + 1}
//                     }
//                     return cartItem
//                     })
//             }
//         case CART_DECREASE_ITEMQUANTITY:
//             return {
//                 ...state,
//                 cartItems: state.cartItems.map((cartItem) => {
//                     if (cartItem.productId === action.payload.productId) {
//                         return { ...cartItem, quantity: cartItem.quantity -1 }
//                     }
//                     return cartItem
//                 }).filter((cartItem) => cartItem.quantity > 0)
//             }
//         case WISHLIST_ADD_ITEM:
//             return {
//                 ...state,
//                 wishList : [...state.wishList, action.payload]
//             }
//         case WISHLIST_REMOVE_ITEM:
//             return {
//                 ...state,
//                 wishList: [...state.wishList.filter((wishListItem) => wishListItem.productId !== action.payload.productId)]
//             }
//         default:
//             return state;
//     }
// }

const reducer = combineReducers({
    products : productsReducer,
    cartItems : cartReducer,
    wishList : wishListReducer
})
export const store = createStore(reducer, window. __REDUX_DEVTOOLS_EXTENSION__?.()); //store enhancer
console.log(store)




