import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      applicant: {}
    };
  }

  formSubmit = submitE => {
    submitE.preventDefault();
  };

  inputChange = changeE => {
    let name = changeE.target.name;
    let value = changeE.target.value;
    changeE.persist();

    this.setState(state => {
      return {
        applicant: {
          ...state.applicant,
          [name]: value
        }
      };
    });
  };

  render() {
    let { applicant } = this.state;
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            name={"school"}
            placeholder={"School"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"type"}
            placeholder={"Type"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"start"}
            placeholder={"Start Date"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"end"}
            placeholder={"End Date"}
            onChange={this.inputChange}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Education;
