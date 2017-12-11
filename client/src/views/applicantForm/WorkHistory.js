import React, { Component } from "react";
import applicantCrud from "../../crud";
import { set } from "lodash";
import { SubmitButton, TextInput, Label, Button } from "../../components";
import { formStyles } from "../../styles";

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
            <h1>Work History</h1>
          </div>
          {/* Form 1 */}

          <form style={formStyles.wrapper} onSubmit={this.formSubmit}>
            {/* Compnay Street group */}

            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[0].company"} text={"Company:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[0].company
                  }
                  type="text"
                  name={"workHistory[0].company"}
                  placeholder={"Company"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[0].street"} text={"Street:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[0].street
                  }
                  type="text"
                  name={"workHistory[0].street"}
                  placeholder={"Street"}
                  onChange={this.inputChange}
                />
              </div>
            </div>

            {/* City State Zip group */}

            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[0].city"} text={"City:"} />
                <TextInput
                  value={applicant.workHistory && applicant.workHistory[0].city}
                  type="text"
                  name={"workHistory[0].city"}
                  placeholder={"City"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[0].state"} text={"State:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[0].state
                  }
                  type="text"
                  name={"workHistory[0].state"}
                  placeholder={"State"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[0].zip"} text={"Zip Code:"} />
                <TextInput
                  value={applicant.workHistory && applicant.workHistory[0].zip}
                  type="number"
                  name={"workHistory[0].zip"}
                  placeholder={"Zip"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[0].phone"} text={"Phone Number:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[0].phone
                  }
                  type="tel"
                  name={"workHistory[0].phone"}
                  placeholder={"***-***-****"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[0].position"} text={"Position:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[0].position
                  }
                  type="text"
                  name={"workHistory[0].position"}
                  placeholder={"Position"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[0].start"} text={"Start Date:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[0].start
                  }
                  type="text"
                  name={"workHistory[0].start"}
                  placeholder={"Start Date"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[0].end"} text={"End Date:"} />
                <TextInput
                  value={applicant.workHistory && applicant.workHistory[0].end}
                  type="text"
                  name={"workHistory[0].end"}
                  placeholder={"End Date"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
          </form>

          <hr style={formStyles.hr} />

          {/* Form 2 */}

          <form style={formStyles.wrapper} onSubmit={this.formSubmit}>
            {/* Compnay Street group */}
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[1].company"} text={"Company:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[1].company
                  }
                  type="text"
                  name={"workHistory[1].company"}
                  placeholder={"Company"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[1].street"} text={"Street:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[1].street
                  }
                  type="text"
                  name={"workHistory[1].street"}
                  placeholder={"Street"}
                  onChange={this.inputChange}
                />
              </div>
            </div>

            {/* City State Zip group */}

            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[1].city"} text={"City:"} />
                <TextInput
                  value={applicant.workHistory && applicant.workHistory[1].city}
                  type="text"
                  name={"workHistory[1].city"}
                  placeholder={"City"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[1].state"} text={"State:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[1].state
                  }
                  type="text"
                  name={"workHistory[1].state"}
                  placeholder={"State"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[1].zip"} text={"Zip Code:"} />
                <TextInput
                  value={applicant.workHistory && applicant.workHistory[1].zip}
                  type="number"
                  name={"workHistory[1].zip"}
                  placeholder={"Zip"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[1].phone"} text={"Phone Number:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[1].phone
                  }
                  type="tel"
                  name={"workHistory[1].phone"}
                  placeholder={"***-***-****"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[1].position"} text={"Position:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[1].position
                  }
                  type="text"
                  name={"workHistory[1].position"}
                  placeholder={"Position"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[1].start"} text={"Start Date:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[1].start
                  }
                  type="text"
                  name={"workHistory[1].start"}
                  placeholder={"Start Date"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[1].end"} text={"End Date:"} />
                <TextInput
                  value={applicant.workHistory && applicant.workHistory[1].end}
                  type="text"
                  name={"workHistory[1].end"}
                  placeholder={"End Date"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
          </form>

          <hr style={formStyles.hr} />

          {/* Form 3 */}

          <form style={formStyles.wrapper} onSubmit={this.formSubmit}>
            {/* Compnay Street group */}
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[2].company"} text={"Company"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[2].company
                  }
                  type="text"
                  name={"workHistory[2].company"}
                  placeholder={"Company"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[2].street"} text={"Street:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[2].street
                  }
                  type="text"
                  name={"workHistory[2].street"}
                  placeholder={"Street"}
                  onChange={this.inputChange}
                />
              </div>
            </div>

            {/* City State Zip group */}

            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[2].city"} text={"City:"} />
                <TextInput
                  value={applicant.workHistory && applicant.workHistory[2].city}
                  type="text"
                  name={"workHistory[2].city"}
                  placeholder={"City"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[2].state"} text={"State:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[2].state
                  }
                  type="text"
                  name={"workHistory[2].state"}
                  placeholder={"State"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[2].zip"} text={"Zip Code:"} />
                <TextInput
                  value={applicant.workHistory && applicant.workHistory[2].zip}
                  type="number"
                  name={"workHistory[2].zip"}
                  placeholder={"Zip"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[2].phone"} text={"Phone Number:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[2].phone
                  }
                  type="tel"
                  name={"workHistory[2].phone"}
                  placeholder={"***-***-****"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[2].position"} text={"Position:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[2].position
                  }
                  type="text"
                  name={"workHistory[2].position"}
                  placeholder={"Position"}
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div style={formStyles.inputGroup}>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[2].start"} text={"Start Date:"} />
                <TextInput
                  value={
                    applicant.workHistory && applicant.workHistory[2].start
                  }
                  type="text"
                  name={"workHistory[2].start"}
                  placeholder={"Start Date"}
                  onChange={this.inputChange}
                />
              </div>
              <div style={formStyles.groupItem}>
                <Label for={"workHistory[2].end"} text={"End Date:"} />
                <TextInput
                  value={applicant.workHistory && applicant.workHistory[2].end}
                  type="text"
                  name={"workHistory[2].end"}
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

export default WorkHistory;

// const styles = {
//   hr: {
//     width: "100%",
//     margin: "10px 0px"
//   },

//   wrapper: {
//     flex: 1,
//     maxWidth: 720,
//     display: "flex",
//     flexDirection: "column"
//   },

//   inputGroup: {
//     flex: 1,
//     display: "flex",
//     padding: "5px 0px",
//     flexFlow: "row wrap"
//   },

//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },

//   h1: {
//     textAlign: "center",
//     color: "rgb(130, 130, 130)",
//     fontFamily: "Verdana, Geneva, sans-serif"
//   },

//   groupItem: {
//     flex: 1,
//     minWidth: 210,
//     display: "flex",
//     flexDirection: "column"
//   }
// };
