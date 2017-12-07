import React, { Component } from "react";

class CourseInfo extends Component {
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
