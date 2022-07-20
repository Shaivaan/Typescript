import React from 'react'
import { NavigateFunction, NavigateProps, useNavigate } from 'react-router-dom'



type PropType = {
    navigate:NavigateFunction
}


export class ClassNavigater extends React.Component<PropType,{name:string}>{

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