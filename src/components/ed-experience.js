import React from "react";
import logo from "./check-logo.png";
import "./styles/ed-experience.css";
class EdExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: "",
      university: "",
      city: "",
      year_of_grad: "",
    };
  }
  handleSubmit(e) {
    let degree = document.getElementById("degree");
    let university = document.getElementById("university");
    let city = document.getElementById("city");
    let year_of_grad = document.getElementById("year-of-grad");
    e.setState({
      degree: degree.value,
      university: university.value,
      city: city.value,
      year_of_grad: year_of_grad.value,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="ed-exp">
        <div className="ed-exp-info">
          <div className="input-field">
            <label htmlFor="degree">Educational degree : </label>
            <input
              id="degree"
              type="text"
              name="degree"
              placeholder="Enter your Educational degree"
            />
          </div>
          <div className="input-field">
            <label htmlFor="university">University : </label>
            <input
              id="university"
              type="text"
              name="university"
              placeholder="Enter your University name"
            />
          </div>
          <div className="input-field">
            <label htmlFor="city">City of Education : </label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Enter your City of Education"
            />
          </div>
          <div className="input-field">
            <label htmlFor="year-of-grad">Year of Graduation : </label>
            <input
              id="year-of-grad"
              type="number"
              name="year-of-grad"
              placeholder="Enter your year of graduation"
            />
          </div>
        </div>
        <button className="submit" onClick={() => this.handleSubmit(this)}>
          <img className="check" src={logo} alt="check" />
        </button>
      </div>
    );
  }
}

export default EdExperience;
