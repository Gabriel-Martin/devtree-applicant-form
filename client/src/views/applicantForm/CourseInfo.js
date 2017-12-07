import React, { Component } from "react";

class CourseInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="" />
          <input
            name={"courseDates"}
            type="text"
            placeholder={"Preferred course dates"}
          />
          <input
            name={"courseDates"}
            type="textarea"
            placeholder={"Coding Experience"}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CourseInfo;
