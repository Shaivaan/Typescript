import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../component/Home/Home'
import { ClassLocator } from '../component/Location/ClassLocator'
import { ClassNavigater } from '../component/Navigation/Navigater'
import { Wrapper } from './Wrapper'


type PropType = {
  navigate : any;
  location : any;
}


class Routers extends React.Component<PropType,{}>{
    render() {
         return <>
            <Routes>

              {/* This consist useState,useEffect,setState in Class Component */}
              <Route path='/' element= {<Home/>} />
              {/* Navigation in Class Components change route by yourself*/}
              <Route path='/nav' element= {<ClassNavigater navigate={this.props.navigate}/>}/>
              {/* This Component consist the use of useLocation */}
              <Route path='/loc' element= {<ClassLocator location={this.props.location} navigate= {this.props.navigate}/>}/>
            </Routes>
         </> 
    }
}

export default Wrapper(Routers);