import React from "react";
import "./styles/general.css";
import logo from './check-logo.png'
class General extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };
  }
  handleSubmit(e) {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    e.setState({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="general">
        <div className="general-info">
          <div className="input-field">
            <label htmlFor="firstName">First Name : </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Enter your First name"
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name : </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email Address : </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your Email Address"
            />
          </div>
          <div className="input-field">
            <label htmlFor="phone">Phone Number : </label>
            <input
              id="phone"
              type="number"
              name="phone"
              placeholder="Enter your phone Number"
            />
          </div>
        </div>
        <button className="submit" onClick={() => this.handleSubmit(this)}>
          <img className='check' src={logo} alt="check"/> 
        </button>
      </div>
    );
  }
}

export default General;
