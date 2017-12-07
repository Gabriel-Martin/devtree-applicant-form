import React, { Component } from "react";
import applicantCrud from "../../crud";
import { set } from "lodash";

class WorkHistory extends Component {
  constructor() {
    super();

    this.state = {
      applicant: {
        workHistory: [{}, {}, {}]
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
      this.props.history.push(`/course-info/${applicantId}`);
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

    changeE.persist();

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
            value={applicant.workHistory && applicant.workHistory[0].company}
            type="text"
            name={"workHistory[0].company"}
            placeholder={"Company"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].street}
            type="text"
            name={"workHistory[0].street"}
            placeholder={"Street"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].city}
            type="text"
            name={"workHistory[0].city"}
            placeholder={"City"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].state}
            type="text"
            name={"workHistory[0].state"}
            placeholder={"State"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].zip}
            type="number"
            name={"workHistory[0].zip"}
            placeholder={"Zip"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].phone}
            type="tel"
            name={"workHistory[0].phone"}
            placeholder={"***-***-****"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].position}
            type="text"
            name={"workHistory[0].position"}
            placeholder={"Position"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].start}
            type="text"
            name={"workHistory[0].start"}
            placeholder={"Start Date"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].end}
            type="text"
            name={"workHistory[0].end"}
            placeholder={"End Date"}
            onChange={this.inputChange}
          />
        </form>

        <form onSubmit={this.formSubmit}>
          <input
            value={applicant.workHistory && applicant.workHistory[1].company}
            type="text"
            name={"workHistory[1].company"}
            placeholder={"Company"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].street}
            type="text"
            name={"workHistory[1].street"}
            placeholder={"Street"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].city}
            type="text"
            name={"workHistory[1].city"}
            placeholder={"City"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].state}
            type="text"
            name={"workHistory[1].state"}
            placeholder={"State"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].zip}
            type="number"
            name={"workHistory[1].zip"}
            placeholder={"Zip"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].phone}
            type="tel"
            name={"workHistory[1].phone"}
            placeholder={"***-***-****"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].position}
            type="text"
            name={"workHistory[1].position"}
            placeholder={"Position"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].start}
            type="text"
            name={"workHistory[1].start"}
            placeholder={"Start Date"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].end}
            type="text"
            name={"workHistory[1].end"}
            placeholder={"End Date"}
            onChange={this.inputChange}
          />
        </form>

        <form onSubmit={this.formSubmit}>
          <input
            value={applicant.workHistory && applicant.workHistory[2].company}
            type="text"
            name={"workHistory[2].company"}
            placeholder={"Company"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].street}
            type="text"
            name={"workHistory[2].street"}
            placeholder={"Street"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].city}
            type="text"
            name={"workHistory[2].city"}
            placeholder={"City"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].state}
            type="text"
            name={"workHistory[2].state"}
            placeholder={"State"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].zip}
            type="number"
            name={"workHistory[2].zip"}
            placeholder={"Zip"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].phone}
            type="tel"
            name={"workHistory[2].phone"}
            placeholder={"***-***-****"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].position}
            type="text"
            name={"workHistory[2].position"}
            placeholder={"Position"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].start}
            type="text"
            name={"workHistory[2].start"}
            placeholder={"Start Date"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].end}
            type="text"
            name={"workHistory[2].end"}
            placeholder={"End Date"}
            onChange={this.inputChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default WorkHistory;
