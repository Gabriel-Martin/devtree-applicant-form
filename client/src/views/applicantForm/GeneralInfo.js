import React, { Component } from "react";
import { TextInput, SubmitButton, Label } from "../../components";
import applicantCrud from "../../crud";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      applicant: {
        address: {}
      }
    };
  }

  submitApplicant = () => {
    let { applicantId } = this.props.match.params;
    let { applicant } = this.state;
    applicantCrud.update(applicantId, applicant).then(res => {
      this.props.history.push(`/education/${res.id}`);
    });
  };

  formSubmit = submitE => {
    submitE.preventDefault();

    this.submitApplicant();
  };

  inputChange = changeE => {
    changeE.persist();

    let name = changeE.target.name;
    let value = changeE.target.value;

    if (
      name === "email" ||
      name === "phone" ||
      name === "lastname" ||
      name === "overEighteen" ||
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
          <Label htmlFor="firstname">firstname: </Label>
          <TextInput
            type={"text"}
            name={"firstname"}
            placeholder={"First Name"}
            onChange={this.inputChange}
          />
          <br />
          <Label htmlFor="lastname">lastname: </Label>
          <TextInput
            type={"text"}
            name={"lastname"}
            placeholder={"Last Name"}
            onChange={this.inputChange}
          />
          <br />
          <Label htmlFor="street">street: </Label>
          <TextInput
            type={"text"}
            name={"street"}
            placeholder={"Street Name"}
            onChange={this.inputChange}
          />
          <br />
          <Label htmlFor="city">city: </Label>
          <TextInput
            type={"text"}
            name={"city"}
            placeholder={"City"}
            onChange={this.inputChange}
          />
          <br />
          <Label htmlFor="state">state: </Label>
          <TextInput
            type={"text"}
            name={"state"}
            placeholder={"State"}
            onChange={this.inputChange}
          />
          <br />
          <Label htmlFor="zip">zip: </Label>
          <TextInput
            type={"number"}
            name={"zip"}
            placeholder={"Zip Code"}
            onChange={this.inputChange}
          />
          <br />
          <Label htmlFor="phone">phone: </Label>
          <TextInput
            type={"tel"}
            name={"phone"}
            placeholder={"***-***-****"}
            onChange={this.inputChange}
          />
          <br />
          <Label htmlFor="email">email: </Label>
          <TextInput
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            onChange={this.inputChange}
          />
          <br />
          <Label htmlFor="overeighteen">
            Are you 18 years of age or older?{" "}
          </Label>
          <input
            value={"true"}
            type={"radio"}
            name={"overEighteen"}
            onChange={this.inputChange}
          />{" "}
          Yes
          <input
            value={"false"}
            type={"radio"}
            name={"overEighteen"}
            onChange={this.inputChange}
          />{" "}
          No
          <br />
          <SubmitButton type={"submit"} />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
