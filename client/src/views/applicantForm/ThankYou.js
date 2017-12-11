import React, { Component } from "react";
import { thankYou } from "../../styles";

class ThankYou extends Component {
  render() {
    return (
      <div style={thankYou}>
        <h1>Thanks for applying to Devtree Academy!</h1>
        <h3>
          You will be contacted as soon as we have reviewed your application.
        </h3>
        <p>- Devtree team</p>
      </div>
    );
  }
}

export default ThankYou;
