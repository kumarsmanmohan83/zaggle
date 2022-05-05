import logo from './logo.svg';
import './App.css';
import React from 'react';
class ControlledForm1 extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        isGoing: true,
        numberOfGuests: 2,
        firstName: null,
        lastName: null
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert( this.state.value);
      event.preventDefault();
    } 
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <div  class="App input label" >
            
        <form > 
           <h1>Registration Form</h1>
           <br/><br/>
          
          <label class="form-control">
              First Name:
              <input 
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
          <label>
              Last Name:
              <input 
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
          <label>
            Age:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
          <label>
              Email Id:
              <input 
                name="emailId"
                type="text"
                value={this.state.emailId}
                onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
          <label>
              Password:  
              <input 
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
          <label>
            Terms and Conditions:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
          <button type="button" class="btn btn-primary">Submit</button>
        </form>

        </div>
      );
    }
  }
  
 
  
  export default ControlledForm1;