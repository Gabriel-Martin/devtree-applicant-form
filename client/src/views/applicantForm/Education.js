import React, { Component } from "react";
import applicantCrud from "../../crud";

import { set } from "lodash";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      applicant: {
        education: [{}, {}, {}]
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
      this.props.history.push(`/work-history/${applicantId}`);
    });
  };

  formSubmit = submitE => {
    submitE.preventDefault();

    this.updateApplicant();
  };

  inputChange = changeE => {
    let path = changeE.target.name;
    let value = changeE.target.value;

    let applicant = Object.assign({}, this.state.applicant);

    set(applicant, path, value);

    this.setState(state => {
      return {
        applicant
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
            value={applicant.education && applicant.education[0].school}
            name={"education[0].school"}
            placeholder={"School"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            value={applicant.education && applicant.education[0].type}
            name={"education[0].type"}
            placeholder={"Type"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            value={applicant.education && applicant.education[0].start}
            name={"education[0].start"}
            placeholder={"Start Date"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            value={applicant.education && applicant.education[0].end}
            name={"education[0].end"}
            placeholder={"End Date"}
            onChange={this.inputChange}
          />
        </form>

        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            value={applicant.education && applicant.education[1].school}
            name={"education[1].school"}
            placeholder={"School"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            value={applicant.education && applicant.education[1].type}
            name={"education[1].type"}
            placeholder={"Type"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            value={applicant.education && applicant.education[1].start}
            name={"education[1].start"}
            placeholder={"Start Date"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            value={applicant.education && applicant.education[1].end}
            name={"education[1].end"}
            placeholder={"End Date"}
            onChange={this.inputChange}
          />
        </form>

        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            value={applicant.education && applicant.education[2].school}
            name={"education[2].school"}
            placeholder={"School"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            value={applicant.education && applicant.education[2].type}
            name={"education[2].type"}
            placeholder={"Type"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            value={applicant.education && applicant.education[2].start}
            name={"education[2].start"}
            placeholder={"Start Date"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            value={applicant.education && applicant.education[2].end}
            name={"education[2].end"}
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
