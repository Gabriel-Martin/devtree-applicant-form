import React, { Component } from "react";
import applicantCrud from "../../crud";
class Education extends Component {
  constructor() {
    super();

    this.state = {
      applicant: {
        education: []
      }
    };
  }

  formSubmit = submitE => {
    let { applicant } = this.state;
    submitE.preventDefault();
    applicantCrud.update(applicant.id).then(data => {
      this.setState(state => {
        return {
          applicant: applicant
        };
      });
    });
  };

  inputChange = changeE => {
    let name = changeE.target.name;
    let value = changeE.target.value;

    changeE.persist();

    let education = { ...education, [name]: value };

    this.setState(state => {
      return {
        applicant: {
          education: [
            {
              ...state.applicant.education[0],
              [name]: value
            }
          ]
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
