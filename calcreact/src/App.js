
import React, { Component } from 'react';
import './App.css';
import Keypad from './Keypad/Keypad';
import ResultDisplay from './ResultDisplay/ResultDisplay'

class App extends Component {
  state = {
    result : "0"
  }

  onClick = button => {
    console.log(button);
    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
  }

  calculate = () => {
    try {
        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

  render(){
    return (
      <div className="calculator">
        <ResultDisplay result = {this.state.result}/>
        <Keypad onClick = {this.onClick}/>
      </div>
    );
  }
}

export default App;
