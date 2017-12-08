import React, { Component } from "react";
import applicantCrud from "../../crud";

import { Label, Select, TextArea } from "../../components";

class CourseInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applicant: {
        preferredcourse: "12-12-12"
      }
    };
  }

  componentDidMount() {
    let { applicantId } = this.props.match.params;

    applicantCrud.getById(applicantId).then(applicant => {
      this.setState(state => {
        return {
          applicant: {
            ...this.state.applicant,
            ...applicant
          }
        };
      });
    });
  }

  updateApplicant = () => {
    let { applicantId } = this.props.match.params;
    let { applicant } = this.state;

    applicantCrud.update(applicantId, applicant).then(data => {
      // this.props.history.push(`/`);
    });
  };

  formSubmit = submitE => {
    submitE.preventDefault();

    this.updateApplicant();
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
          <Label for="codingexperience" text={"Coding Experience"} />
          <br />
          <TextArea
            name={"codingexperience"}
            onChange={this.inputChange}
            value={applicant.codingexperience}
            placeholder={"Coding Experience"}
          />
          <br />
          <Label for="courseDates" text={"Preferred Course:"} />
          <br />
          <Select onChange={this.inputChange} name={"preferredcourse"} />
          <br />

          <input type={"submit"} />
        </form>
      </div>
    );
  }
}

export default CourseInfo;
