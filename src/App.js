import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    //this.onClick = this.onClick.bind(this);
  }
  state = {
    persons:[
      {name: 'Ammon', age: 28, children: 'Ha Ha Ha'},
      {name: 'Lee', age: 29},
      {name: 'Ho', age: 19}
    ] 
  };
  switchNameHandler= (appendStr) =>  {
    console.log("state:", this.state);
    let x = this.state.persons.map(p =>  ({...p, name: p.name + appendStr, age: p.age + 1}) );
    this.setState({persons: x});
  }
  nameChangeHandler = (event, childKey) => {
    debugger;
    let x = [...this.state.persons];
    x[childKey].name = event.target.value;
    this.setState(
      {
        /*persons:[
          {name: 'Ammon', age: 28, children: 'Ha Ha Ha'},
          {name: event.target.value, age: 29},
          {name: 'Ho', age: 19}
        ] */ persons: x
      }
    );
  }
  render() {
    const bStyle=
      {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
    return (
      <div className="App">
        <h1>Hi testing</h1>
        <p>This is really working</p>
        <div className="Person">Hello World </div>
          {
            this.state.persons.map(
                (p, i) => (
                    <Person name={p.name} age={p.age} childKey={i} clickHandler={this.switchNameHandler.bind(this, 'from btn ' + i)} nameChangeHandler={this.nameChangeHandler}>{p.children ? p.children : ""}</Person> 
                  )
            )
          }
      <button style={bStyle} onClick={this.switchNameHandler.bind(this, "from top btn")}>Change name</button>
      </div>
      
    );
  }
}

export default App