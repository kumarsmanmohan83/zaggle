import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component{
  constructor(props){
    super();
     this.state = {Frequency:100,Name:'default'};
     this.setval = this.setval.bind(this);
     this.handle1 = this.handle1.bind(this);
  }
  handle1(e){
   this.setState({Name:e.target.value});
    
  }
  setval(){
    this.setState({Frequency:500});
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Mr. {this.props.name}
          <br></br>Hello, Manmohan Kumar
          Frequency {this.state.Frequency}
          <br></br>
          Name : {this.state.Name}
          </p>
          <br></br>
          <input value ={this.state.Name} type="text" placeholder ="Enter name" onChange ={this.handle1}></input>
          <br></br>
          <button onClick={this.setval}>Click To Change Frequency</button>
  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
