import { set } from "lodash";
import applicantCrud from "../../crud";
import React, { Component } from "react";
import { formStyles } from "../../styles";
import { Label, TextInput, SubmitButton, Button } from "../../components";

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
        applicant: applicant
      };
    });
  };

  previousForm = event => {
    event.preventDefault();

    this.props.history.go(-1);
  };

  render() {
    let { applicant } = this.state;

    return (
      <div style={formStyles.container}>
        <div style={formStyles.wrapper}>
          <div style={formStyles.h1}>
            <h1>Education</h1>
          </div>
          {/* School form 1 */}

          <form style={formStyles.wrapper} onSubmit={this.formSubmit}>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"education[0].school"} text={"School Name:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[0].school}
                  name={"education[0].school"}
                  placeholder={"School"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"education[0].type"} text={"Type:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[0].type}
                  name={"education[0].type"}
                  placeholder={"Type"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"education[0].start"} text={"Start Date:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[0].start}
                  name={"education[0].start"}
                  placeholder={"Start Date"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"education[0].end"} text={"End Date:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[0].end}
                  name={"education[0].end"}
                  placeholder={"End Date"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
          </form>

          <hr style={formStyles.hr} />

          {/* School form 2 */}

          <form style={formStyles.wrapper} onSubmit={this.formSubmit}>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"education[1].school"} text={"School Name:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[1].school}
                  name={"education[1].school"}
                  placeholder={"School"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"education[1].type"} text={"Type:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[1].type}
                  name={"education[1].type"}
                  placeholder={"Type"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"education[1].start"} text={"Start Date:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[1].start}
                  name={"education[1].start"}
                  placeholder={"Start Date"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"education[1].end"} text={"End Date:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[1].end}
                  name={"education[1].end"}
                  placeholder={"End Date"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
          </form>

          <hr style={formStyles.hr} />

          {/* School form 3 */}

          <form style={formStyles.wrapper} onSubmit={this.formSubmit}>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"education[2].school"} text={"School Name:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[2].school}
                  name={"education[2].school"}
                  placeholder={"School"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"education[2].type"} text={"Type:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[2].type}
                  name={"education[2].type"}
                  placeholder={"Type"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"education[2].start"} text={"Start Date:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[2].start}
                  name={"education[2].start"}
                  placeholder={"Start Date"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"education[2].end"} text={"End Date:"} />
                <TextInput
                  type="text"
                  value={applicant.education && applicant.education[2].end}
                  name={"education[2].end"}
                  placeholder={"End Date"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Button onClick={this.previousForm} label={"< Previous"} />
              </div>
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

export default Education;
