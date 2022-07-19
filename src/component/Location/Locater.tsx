import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ClassLocator } from './ClassLocator';

export const Locater=()=> {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!location.state){
            navigate("/nav")
        }
    },[])
  return (
    <>
        <ClassLocator location = {location} navigate= {navigate}/>
    </>
  )
}



//     type PropType = {
//         location:any,
//         navigate:any
//     }

//     type StateType = {
//         name:any
//     }


// class ClassLocator extends React.Component<PropType,StateType>{
//     constructor(props:PropType){
//         super(props);
//         this.state = {
//             name: this.props.location.state ? this.props.location.state.name : null
//         }
//     }

    

//     componentDidMount(){
//         if(this.state.name == null){
//     //         console.log(this.state.name,this.props.navigate);
//     //         this.props.navigate("/nav");
//     //         return;
//             this.redirects()
//         }
//     }

//     redirects(){
//         this.props.navigate("/nav");
//     }

//     render(): React.ReactNode {
//         const {name} = this.state;
//         return <>
//             <h1>Name:{name}</h1>
            
//         </>
//     }
// }