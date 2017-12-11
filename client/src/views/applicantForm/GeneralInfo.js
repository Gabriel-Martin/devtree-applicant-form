import applicantCrud from "../../crud";
import React, { Component } from "react";
import { formStyles } from "../../styles";
import { TextInput, SubmitButton, Label, Button } from "../../components";

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
    return (
      <div style={formStyles.container}>
        <div style={formStyles.wrapper}>
          <div>
            <h1 style={formStyles.h1}>General Info</h1>
          </div>
          <form style={formStyles.wrapper} onSubmit={this.formSubmit}>
            {/* First and last name input group */}

            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for="firstname" text={"First Name:"} />
                <TextInput
                  type={"text"}
                  name={"firstname"}
                  placeholder={"First Name"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for="lastname" text={"Last Name:"} />
                <TextInput
                  type={"text"}
                  name={"lastname"}
                  placeholder={"Last Name"}
                  onChange={this.inputChange}
                />
              </div>
            </div>

            {/* Street input */}

            <div style={formStyles.groupItem}>
              <Label for="street" text={"Street:"} />
              <TextInput
                type={"text"}
                name={"street"}
                placeholder={"Street Name"}
                onChange={this.inputChange}
              />
            </div>

            {/* City State Zip input group */}

            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for="city" text={"City:"} />
                <TextInput
                  type={"text"}
                  name={"city"}
                  placeholder={"City"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for="state" text={"State:"} />
                <TextInput
                  type={"text"}
                  name={"state"}
                  placeholder={"State"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for="zip" text={"Zip Code:"} />
                <TextInput
                  type={"number"}
                  name={"zip"}
                  placeholder={"Zip Code"}
                  onChange={this.inputChange}
                />
              </div>
            </div>

            {/* Phpne Email input group */}

            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for="phone" text={"Phone Number:"} />
                <TextInput
                  type={"tel"}
                  name={"phone"}
                  placeholder={"***-***-****"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for="email" text={"Email:"} />
                <TextInput
                  type={"email"}
                  name={"email"}
                  placeholder={"Email"}
                  onChange={this.inputChange}
                />
              </div>
            </div>

            {/* Over Eighteen input */}

            <div style={formStyles.inputGroup}>
              <Label for="overeighteen" text={"Are you 18 years or older?"} />
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
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <SubmitButton label={"Next >"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
