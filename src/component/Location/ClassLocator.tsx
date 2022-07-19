import React from 'react'


type PropType = {
    location:any,
    navigate:any
}

type StateType = {
    name:any
}

export class ClassLocator extends React.Component<PropType,StateType>{
    constructor(props:PropType){
        super(props);
        this.state = {
            name: this.props.location.state ? this.props.location.state.name : null
        }
    }

    

    // componentDidMount(){
    //     if(this.state.name == null){
    // //         console.log(this.state.name,this.props.navigate);
    // //         this.props.navigate("/nav");
    // //         return;
    //         this.redirects()
    //     }
    // }

    // redirects(){
    //     console.log(11)
    //     this.props.navigate("/nav");
    // }

    render(): React.ReactNode {
        const {name} = this.state;
        return <>
            <h1>Name:{name}</h1>
            
        </>
    }
}