import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../component/Home'

export class Routers extends React.Component{
    render() {
         return <>
            <Routes>
              <Route path='/' element= {<Home/>}></Route>
            </Routes>
         </> 
    }
}
