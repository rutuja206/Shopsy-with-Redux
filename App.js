import React from 'react'
import Product from './components/Product'
import './App.css'
import {store} from './store/index'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
}

export default App
