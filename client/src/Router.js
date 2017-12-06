import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ApplicantForm } from "./views";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path={"/general-info"}
            component={ApplicantForm.GeneralInfo}
          />
          <Route
            exact
            path={"/work-history"}
            component={ApplicantForm.WorkHistory}
          />
          <Route
            exact
            path={"/education"}
            component={ApplicantForm.Education}
          />
          <Route
            exact
            path={"/course-info"}
            component={ApplicantForm.CourseInfo}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
