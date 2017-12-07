import React, { Component } from "react";

class WorkHistory extends Component {
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
            name={"company"}
            placeholder={"Company"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"street"}
            placeholder={"Street"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"city"}
            placeholder={"City"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"state"}
            placeholder={"State"}
            onChange={this.inputChange}
          />
          <input
            type="number"
            name={"zip"}
            placeholder={"Zip"}
            onChange={this.inputChange}
          />
          <input
            type="tel"
            name={"phone"}
            placeholder={"***-***-****"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"position"}
            placeholder={"Position"}
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

export default WorkHistory;
