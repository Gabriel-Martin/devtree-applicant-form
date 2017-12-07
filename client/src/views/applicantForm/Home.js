import React, { Component } from "react";
import applicantCrud from "../../crud";
import uuid from "uuid";

class Home extends Component {
  apply = () => {
    let id = uuid.v4();
    applicantCrud.create({ id: id }).then(data => {
      this.props.history.push("/general-info/:applicantId");
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.apply}>Apply For Classes!!!!!!!!!!</button>
      </div>
    );
  }
}
export default Home;
