import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      applicant: {
        address: {}
      }
    };
  }

  formSubmit = submitE => {
    submitE.preventDefault();
  };

  inputChange = changeE => {
    changeE.persist();

    let name = changeE.target.name;
    let value = changeE.target.value;

    if (
      name === "email" ||
      name === "phone" ||
      name === "lastname" ||
      name === "firstname"
    ) {
      this.setState(state => {
        return {
          applicant: {
            ...state.applicant,
            [name]: value
          }
        };
      });
    } else {
      this.setState(state => {
        return {
          applicant: {
            ...state.applicant,
            address: {
              ...state.applicant.address,
              [name]: value
            }
          }
        };
      });
    }
  };

  render() {
    let { applicant } = this.state;

    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <label htmlFor="firstname">firstname: </label>
          <input
            type={"text"}
            name={"firstname"}
            placeholder={"First Name"}
            onChange={this.inputChange}
          />
          <br />
          <label htmlFor="lastname">lastname: </label>
          <input
            type={"text"}
            name={"lastname"}
            placeholder={"Last Name"}
            onChange={this.inputChange}
          />
          <br />
          <label htmlFor="street">street: </label>
          <input
            type={"text"}
            name={"street"}
            placeholder={"Street Name"}
            onChange={this.inputChange}
          />
          <br />
          <label htmlFor="city">city: </label>
          <input
            type={"text"}
            name={"city"}
            placeholder={"City"}
            onChange={this.inputChange}
          />
          <br />
          <label htmlFor="state">state: </label>
          <input
            type={"text"}
            name={"state"}
            placeholder={"State"}
            onChange={this.inputChange}
          />
          <br />
          <label htmlFor="zip">zip: </label>
          <input
            type={"number"}
            name={"zip"}
            placeholder={"Zip Code"}
            onChange={this.inputChange}
          />
          <br />
          <label htmlFor="phone">phone: </label>
          <input
            type={"tel"}
            name={"phone"}
            placeholder={"***-***-****"}
            onChange={this.inputChange}
          />
          <br />
          <label htmlFor="email">email: </label>
          <input
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            onChange={this.inputChange}
          />
          <br />
          <input type={"submit"} />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
