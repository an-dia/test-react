import React, { Component } from "react";
import CounterControls from "./CounterControls";

export default class Counter extends Component {
  static propTypes = {};

  static defaultProps = { initialValue: 0, step: 1 };

  //  constructor(props) {
  //   super(props);

  //    this.state = {
  //      value: this.props.initialValue,
  //    };
  // }

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // console.log(this);
    console.log("Increment");

    // this.setState({value: 5})

    this.setState((prevState, props) => {
      console.log("prevState.value", prevState.value);
      return {
        value: prevState.value + props.step,
      };
    });
  };

  handleDecrement = () => {
    // console.log(this);
    console.log("Decrement");

    this.setState((prevState, props) => {
      console.log("prevState.value", prevState.value);
      return {
        value: prevState.value - props.step,
      };
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <CounterControls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <span>{value}</span>
      </div>
    );
  }
}

//  <button type='button' onClick={(e) => {
//             // console.log(e.target);
//           console.log(this);
//             console.log('Increment');
//           // const t = e.target;
//             // setTimeout(() => {
//             //   console.log(e.target)
//             // }, 500)
//             }}
//             >Increment
//           </button>

// constructor() {
//   super();

//   this.handleIncrement = this.handleIncrement.bind(this);
// }
//  handleIncrement = e => {
//   console.log(this);
//   console.log('Increment');
// }

//    for (let i = 0; i < 3; i += 1) {
//       console.log('this.state.value', this.state.value);
//       this.setState(prevState => {
//      console.log('prevState.value', prevState.value);
//       return {
//         value: prevState.value + 1,
//       }
//     })
//  }
