import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import './App.css';
/*
 * You should only use refs if: 
 * - Managing focus, text selection, or media playback
 * - Triggering imperative animations
 * - Integrating with 3rd party DOM libraries
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      sayings: ''
    };
    /*
     * You shouldn't use inline ref callbacks, so define them here.
     * If a ref is defined as an inline callback it will get called 
     * twice during updates.
    */
    this.setRef = node => {this.a = node};
  }
  update(e) {
    this.setState({
      // sayings: e.target.value // OLD WAY
      // sayings: this.refs.btalks.value // REFS WAY
      sayings: this.a.value // CALLBACK WAY

    });
  }
  
  render() {
    // REFS WAY
    // Using string refs in this example, but they are considered legacy and should be avoided
    // return (
    //   <div className="App">
    //     Bob says <input type="text"
    //                     ref="btalks"
    //                     onChange={this.update.bind(this)}/>
    //     {this.state.sayings}
    //   </div>
    // );  

    // CALLBACK WAY
    return (
      <div className="App">
        Bob says <input type="text"
                        ref={this.setRef}
                        onChange={this.update.bind(this)}/>
        {this.state.sayings}
        <div ref="buddy">-----</div>
      </div>
    );
  }

  /*
   * Refs are first set after the first render(), but before componentDidMount()
  */

  componentDidMount(){
    // You can referer to dom elements using refs in one of two ways
    var el1 = this.refs.buddy; // This way if its a normal dom element
    // var el2 = ReactDOM.findDOMNode(this.refs.buddy); // If its a component
    console.log('Buddy: ', el1);
  }
}

export default App;
