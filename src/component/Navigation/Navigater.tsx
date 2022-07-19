import React from 'react'
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


class ClassNavigater extends React.Component<PropType,{}>{
    render(): React.ReactNode {
        return <>
            <button onClick={()=>this.props.navigate("/")}>Navigate</button>
        </> 
    }
}