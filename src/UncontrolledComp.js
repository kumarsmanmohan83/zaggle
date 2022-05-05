import logo from './logo.svg';
import './App.css';
import React from 'react';
class UncontrolledComp extends React.Component {
    constructor(props) {  
        super(props);  
        this.updateSubmit = this.updateSubmit.bind(this);  
        this.input = React.createRef();  
    }  
    updateSubmit(event) {  
        alert('You have entered the UserName and CompanyName successfully.');  
        event.preventDefault();  
    }  
    render() {  
      return (  
        <form onSubmit={this.updateSubmit}>  
          <h1>Uncontrolled Form Example</h1>  
          <label>Name:  
              <input type="text" ref={this.input} />  
          </label>  
          <br/><br/>
          <label>  
              CompanyName:  
              <input type="text" ref={this.input} />  
          </label>  
          <br/><br/>
          <input type="submit" value="Submit" />  
        </form>  
      );  
    }  









}
export default UncontrolledComp;