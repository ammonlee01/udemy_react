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
      {id: '1', name: 'Ammon', age: 28, children: 'Ha Ha Ha'},
      {id: '2', name: 'Lee', age: 29},
      {id: '3', name: 'Ho', age: 19}
    ],
    showPerson: true
  };
  switchNameHandler= (appendStr) =>  {
    console.log("state:", this.state);
    let x = this.state.persons.map(p =>  ({...p, name: p.name + appendStr, age: p.age + 1}) );
    this.setState({persons: x});
  }
  nameChangeHandler = (event, key) => {
    debugger;
    let x = [...this.state.persons];
    var childKey = x.findIndex(p=>p.id===key);
    x[childKey].name = event.target.value;
    this.setState(
      {persons: x}
    );
  }
  togglePersonHandler = () => {
    this.setState({showPerson: !this.state.showPerson});
  }
  deleteHandler = (key) => {
    var tmpP = [...this.state.persons];
    const index = tmpP.findIndex(p=>p.id===key);
    tmpP.splice(index,1);
    this.setState({persons: tmpP});
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
    let persons = null;
    if (this.state.showPerson)
      persons =
        (
        <div>
          {
            this.state.persons.map(
                (p, i) => (
                    <Person name={p.name} age={p.age} 
                      clickHandler={this.switchNameHandler.bind(this, 'from btn ' + i)} 
                      deleteHandler={this.deleteHandler.bind(this, p.id)}
                      nameChangeHandler={this.nameChangeHandler} key = {p.id}>
                        
                        {p.children ? p.children : ""}
                      
                    </Person> 
                  )
            )
          }
        </div> 
        );
        

    return (
      <div className="App">
        <h1>Hi testing</h1>
        <p>This is really working</p>
        <div className="Person">Hello World </div>
        {persons}
      <button style={bStyle} onClick={this.switchNameHandler.bind(this, "from top btn")}>Change name</button>
      <button onClick={this.togglePersonHandler}>Toggle Person Display</button>
      </div>
      
    );
  }
}

export default App