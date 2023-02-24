import React from "react";
import logo from "./check-logo.png";
import "./styles/practical-exp.css";
class PracticalExp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      years_of_exp: "",
      last_job: "",
      years_at_last_job: "",
      team_size: "",
    };
  }
  handleSubmit(e) {
    let years_of_exp = document.getElementById("years_of_exp");
    let last_job = document.getElementById("last_job");
    let years_at_last_job = document.getElementById("years_at_last_job");
    let team_size = document.getElementById("team_size");
    e.setState({
      years_of_exp: years_of_exp.value,
      last_job: last_job.value,
      years_at_last_job: years_at_last_job.value,
      team_size: team_size.value,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="practical-exp">
        <div className="practical-exp-info">
          <div className="input-field">
            <label htmlFor="years_of_exp">Years of experience : </label>
            <input
              id="years_of_exp"
              type="number"
              name="years_of_exp"
              placeholder="Enter your years of experience"
            />
          </div>
          <div className="input-field">
            <label htmlFor="last_job">last_job : </label>
            <input
              id="last_job"
              type="text"
              name="last_job"
              placeholder="Enter your last_job name"
            />
          </div>
          <div className="input-field">
            <label htmlFor="years_at_last_job">years_at_last_job : </label>
            <input
              id="years_at_last_job"
              type="number"
              name="years_at_last_job"
              placeholder="Enter your years_at_last_job "
            />
          </div>
          <div className="input-field">
            <label htmlFor="team_size">Team size : </label>
            <input
              id="team_size"
              type="number"
              name="team_size"
              placeholder="Enter your team_size"
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

export default PracticalExp;
