import React, { Component } from "react";
import applicantCrud from "../../crud";
import { Button } from "../../components";

class Home extends Component {
  apply = () => {
    applicantCrud.create({}).then(data => {
      this.props.history.push(`/general-info/${data.id}`);
    });
  };

  render() {
    return (
      <div style={styles}>
        <div>
          <Button label={"Apply For Classes"} onClick={this.apply} />
        </div>
      </div>
    );
  }
}
export default Home;

const styles = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center"
};
