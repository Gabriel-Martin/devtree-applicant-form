import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ApplicantForm } from "./views";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path={"/"} component={ApplicantForm.Home} />
          <Route
            exact
            path={"/general-info/:applicantId"}
            component={ApplicantForm.GeneralInfo}
          />
          <Route
            exact
            path={"/work-history/:applicantId"}
            component={ApplicantForm.WorkHistory}
          />
          <Route
            exact
            path={"/education/:applicantId"}
            component={ApplicantForm.Education}
          />
          <Route
            exact
            path={"/course-info/:applicantId"}
            component={ApplicantForm.CourseInfo}
          />
          <Route
            exact
            path={"/thank-you/"}
            component={ApplicantForm.ThankYou}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
