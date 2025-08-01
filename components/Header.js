
import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useSelector } from 'react-redux';

export default function Header() {
    const items = useSelector((state) => {return state.cartItems})
    console.log("items",items)
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopsy</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count" >{items.reduce((acc,curr) => acc + curr.quantity,0)}</div>
        </Link>
      </div>
    </header>
  )
}
