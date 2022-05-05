import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';
import React from 'react';
import Content from './Content';
class App1 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
     };
     setNewNumber() {
        this.setState({data: this.state.data + 1})
     }
     render() {
        return (
           <div>
              <button  onClick = {this.setNewNumber} type="button" class="btn btn-primary">INCREMENT</button>
              <Content myNumber = {this.state.data}>
              method1 ={this.setNewNumber}
              </Content>
           </div>
        );
     }
  }
    
export default App1;