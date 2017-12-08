import React, { Component } from "react";
import applicantCrud from "../../crud";

import { Label, TextInput, SubmitButton } from "../../components";

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={this.formSubmit}
          >
            <Label for={"education[0].school"} text={"School Name:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[0].school}
              name={"education[0].school"}
              placeholder={"School"}
              onChange={this.inputChange}
            />
            <br />
            <Label for={"education[0].type"} text={"Type:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[0].type}
              name={"education[0].type"}
              placeholder={"Type"}
              onChange={this.inputChange}
            />
            <br />
            <Label for={"education[0].start"} text={"Start Date:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[0].start}
              name={"education[0].start"}
              placeholder={"Start Date"}
              onChange={this.inputChange}
            />
            <br />
            <Label for={"education[0].end"} text={"End Date:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[0].end}
              name={"education[0].end"}
              placeholder={"End Date"}
              onChange={this.inputChange}
            />
          </form>

          <hr style={{ width: "100%" }} />

          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={this.formSubmit}
          >
            <Label for={"education[1].school"} text={"School Name:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[1].school}
              name={"education[1].school"}
              placeholder={"School"}
              onChange={this.inputChange}
            />
            <br />
            <Label for={"education[1].type"} text={"Type:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[1].type}
              name={"education[1].type"}
              placeholder={"Type"}
              onChange={this.inputChange}
            />
            <br />
            <Label for={"education[1].start"} text={"Start Date:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[1].start}
              name={"education[1].start"}
              placeholder={"Start Date"}
              onChange={this.inputChange}
            />
            <br />
            <Label for={"education[1].end"} text={"End Date:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[1].end}
              name={"education[1].end"}
              placeholder={"End Date"}
              onChange={this.inputChange}
            />
          </form>

          <hr style={{ width: "100%" }} />

          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={this.formSubmit}
          >
            <Label for={"education[2].school"} text={"School Name:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[2].school}
              name={"education[2].school"}
              placeholder={"School"}
              onChange={this.inputChange}
            />
            <br />
            <Label for={"education[2].type"} text={"Type:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[2].type}
              name={"education[2].type"}
              placeholder={"Type"}
              onChange={this.inputChange}
            />
            <br />
            <Label for={"education[2].start"} text={"Start Date:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[2].start}
              name={"education[2].start"}
              placeholder={"Start Date"}
              onChange={this.inputChange}
            />
            <br />
            <Label for={"education[2].end"} text={"End Date:"} />
            <TextInput
              type="text"
              value={applicant.education && applicant.education[2].end}
              name={"education[2].end"}
              placeholder={"End Date"}
              onChange={this.inputChange}
            />

            <SubmitButton />
          </form>
        </div>
      </div>
    );
  }
}

export default Education;
