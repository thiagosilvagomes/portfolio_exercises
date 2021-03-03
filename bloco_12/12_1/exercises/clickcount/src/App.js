import React from 'react';
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clickNumber: 0,
      class: 'button-green'
    }
  }

  handleClick() {
    this.setState((previousState, _props) => ({
      clickNumber: previousState.clickNumber + 1
    }))
    if (this.state.clickNumber % 2 === 0)
    {
      this.setState((_previousState, _props) => ({
        class: 'button-blue'
      }))
    } else {
      this.setState((_previousState, _props)=> ({
        class: 'button-green' 
      }))
    }
  }
  render() {
    return (
      <div>
        <button className={this.state.class} onClick={this.handleClick}>Counter Colored</button>
        <label>{this.state.clickNumber}</label>
      </div>
    )
  }
}

export default App;
