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
            name={"company"}
            placeholder={"Company"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].street}
            type="text"
            name={"street"}
            placeholder={"Street"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].city}
            type="text"
            name={"city"}
            placeholder={"City"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].state}
            type="text"
            name={"state"}
            placeholder={"State"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].zip}
            type="number"
            name={"zip"}
            placeholder={"Zip"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].phone}
            type="tel"
            name={"phone"}
            placeholder={"***-***-****"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].position}
            type="text"
            name={"position"}
            placeholder={"Position"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].start}
            type="text"
            name={"start"}
            placeholder={"Start Date"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[0].end}
            type="text"
            name={"end"}
            placeholder={"End Date"}
            onChange={this.inputChange}
          />
          <input type="submit" />
        </form>

        <form onSubmit={this.formSubmit}>
          <input
            value={applicant.workHistory && applicant.workHistory[1].company}
            type="text"
            name={"company"}
            placeholder={"Company"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].street}
            type="text"
            name={"street"}
            placeholder={"Street"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].city}
            type="text"
            name={"city"}
            placeholder={"City"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].state}
            type="text"
            name={"state"}
            placeholder={"State"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].zip}
            type="number"
            name={"zip"}
            placeholder={"Zip"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].phone}
            type="tel"
            name={"phone"}
            placeholder={"***-***-****"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].position}
            type="text"
            name={"position"}
            placeholder={"Position"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].start}
            type="text"
            name={"start"}
            placeholder={"Start Date"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[1].end}
            type="text"
            name={"end"}
            placeholder={"End Date"}
            onChange={this.inputChange}
          />
          <input type="submit" />
        </form>

        <form onSubmit={this.formSubmit}>
          <input
            value={applicant.workHistory && applicant.workHistory[2].company}
            type="text"
            name={"company"}
            placeholder={"Company"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].street}
            type="text"
            name={"street"}
            placeholder={"Street"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].city}
            type="text"
            name={"city"}
            placeholder={"City"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].state}
            type="text"
            name={"state"}
            placeholder={"State"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].zip}
            type="number"
            name={"zip"}
            placeholder={"Zip"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].phone}
            type="tel"
            name={"phone"}
            placeholder={"***-***-****"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].position}
            type="text"
            name={"position"}
            placeholder={"Position"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].start}
            type="text"
            name={"start"}
            placeholder={"Start Date"}
            onChange={this.inputChange}
          />
          <input
            value={applicant.workHistory && applicant.workHistory[2].end}
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

export default WorkHistory;
