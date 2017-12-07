import React, { Component } from "react";
import applicantCrud from "../../crud";

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
          <label htmlFor="codingexperience">Coding Experience: </label>
          <br />
          <textarea
            onChange={this.inputChange}
            value={applicant.codingexperience}
            name={"codingexperience"}
            type={"text"}
            rows={5}
            columns={20}
            placeholder={"Coding Experience"}
          />
          <br />
          <label htmlFor="courseDates">Preferred Course: </label>
          <br />
          <select onChange={this.inputChange} name={"preferredcourse"}>
            <option value={"12-12-12"}>12-12-12</option>
            <option value={"1-1-1"}>1-1-1</option>
            <option value={"2-2-2"}>2-2-2</option>
          </select>
          <br />

          <input type={"submit"} />
        </form>
      </div>
    );
  }
}

export default CourseInfo;
