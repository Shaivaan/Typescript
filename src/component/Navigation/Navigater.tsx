import React, { useState } from 'react'
import { NavigateFunction, NavigateProps, useNavigate } from 'react-router-dom'

export const FunNavigater=()=> {
    const navigate = useNavigate();
  return (
    // Use Navigate has been passed in the prop of this Class Component
    <ClassNavigater navigate= {navigate}/>
  )
}


type PropType = {
    navigate:NavigateFunction
}


class ClassNavigater extends React.Component<PropType,{name:string}>{

    constructor(props:PropType){
        super(props)
        this.state={
            name:""
        }
    }

    NavigateToLoc(){
            this.props.navigate("/loc",{state:{name:this.state.name}})
    }

    render(): React.ReactNode {
        const {name} = this.state;
        return <>
            {/* Using useNavigate,accessing the passed prop */}
            <input type="text" placeholder='Enter Name' onChange={(e)=>{this.setState({name:e.target.value})}} />
            <button disabled= {name.trim().length == 0} onClick={()=>this.NavigateToLoc()}>Navigate</button>
        </> 
    }
}