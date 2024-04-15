import React from 'react'
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import UseContextProvider from './Context/UserContextProvider';
const Root = () => {
  return (
    <>
      <UseContextProvider>
      <Header/>
      <Outlet/>
      </UseContextProvider>
    </>
  )
}

export default Root;
