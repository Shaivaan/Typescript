import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../component/Home/Home'
import { Locater } from '../component/Location/Locater'
import { FunNavigater } from '../component/Navigation/Navigater'

export class Routers extends React.Component{
    render() {
         return <>
            <Routes>

              {/* This consist useState,useEffect,setState in Class Component */}
              <Route path='/' element= {<Home/>} />

              {/* Navigation in Class Components change route by yourself*/}
              <Route path='/nav' element= {<FunNavigater/>}/>
              <Route path='/loc' element= {<Locater/>}/>
            </Routes>
         </> 
    }
}
