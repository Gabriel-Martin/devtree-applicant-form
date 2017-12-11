import applicantCrud from "../../crud";
import React, { Component } from "react";
import { formStyles } from "../../styles";
import { Label, Select, TextArea, SubmitButton } from "../../components";

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
      this.props.history.push(`/thank-you`);
    });
  };

  formSubmit = submitE => {
    submitE.preventDefault();

    this.updateApplicant();
  };

  inputChange = changeE => {
    let name = changeE.target.name;
    let value = changeE.target.value;

    console.log(name, value);

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
      <div style={formStyles.container}>
        <div style={formStyles.wrapper}>
          <div style={formStyles.h1}>
            <h1>Course Info</h1>
          </div>
          <form style={formStyles.wrapper} onSubmit={this.formSubmit}>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"codingexperience"} text={"Coding Experience"} />
                <TextArea
                  rows={"10"}
                  name={"codingexperience"}
                  onChange={this.inputChange}
                  value={applicant.codingexperience}
                  placeholder={"Coding Experience"}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"preferredcourse"} text={"Preferred Course:"} />
                <Select
                  name={"preferredcourse"}
                  onChange={this.inputChange}
                  value={applicant.preferredcourse}
                />
              </div>
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    );
  }
}

export default CourseInfo;
