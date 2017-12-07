import React, { Component } from "react";

class GeneralInfo extends Component {
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
            name={"firstname"}
            placeholder={"First Name"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"lastname"}
            placeholder={"Last Name"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"street"}
            placeholder={"Street Name"}
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
            placeholder={"Zip Code"}
            onChange={this.inputChange}
          />
          <input
            type="tel"
            name={"phone"}
            placeholder={"***-***-****"}
            onChange={this.inputChange}
          />
          <input
            type="email"
            name={"email"}
            placeholder={"Email"}
            onChange={this.inputChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
