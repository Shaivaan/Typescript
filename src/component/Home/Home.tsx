import React from "react";

type StateType = {
  count: number;
  noUse: null;
};



// React.Component<Props Types,State Type>
export class Home extends React.Component<{}, StateType> {



  //  useEffect without Dependency
  componentDidMount() {
    console.log("Mounted");
  }



  // useState
  constructor(props: any) {  //both lines are necessary
    super(props); //both lines are necessary
    // let [count,setCount] = useState(0);
    // let [noUse,setNoUse] = useState(null);
    this.state = {
      count: 0,
      noUse: null,
    };
  }


  //  Dependency of UseEffect.
  //  It can observe changes.
  //  Runs when somethings updates.
  componentDidUpdate(previousProps: {}, previousState: StateType) {
    if (this.state.count !== previousState.count) {
      console.log("count update");
    }

    // This Thing is like ↓
    //  useEffect(()=>{

    // },[count])
  }



  //   Increasing and Decreasing Function
  Increment() {
    // setCount(count+1);
    this.setState({
      count: this.state.count + 1,
    });
  }



  Decrement() {
    // setCount(count-1);
    this.setState({
      count: this.state.count - 1,
    });
  }


  
  componentWillUnmount() {
    // Works Only When this components get destroyed or removed
  }
  

  //  render consists JSX just like in functional Component
  render() {
    const { count } = this.state;

    return (
      <>
        <h1>Counter</h1>
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            this.Increment();
          }}
        >
          +
        </button>
        <button
          disabled={this.state.count < 1}
          onClick={() => {
            this.Decrement();
          }}
        >
          -
        </button>
      </>
    );
  }
}
