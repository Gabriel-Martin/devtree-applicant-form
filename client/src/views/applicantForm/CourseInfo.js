import React, { Component } from "react";

class CourseInfo extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder={"Preferred course dates"} />
          <input type="textarea" placeholder={"Coding Experience"} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CourseInfo;
