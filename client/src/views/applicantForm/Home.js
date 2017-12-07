import React, { Component } from "react";
import applicantCrud from "../../crud";

class Home extends Component {
  apply = () => {
    applicantCrud.create({}).then(data => {
      this.props.history.push(`/general-info/${data.id}`);
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
