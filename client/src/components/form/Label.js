import React from "react";

const Label = props => {
  return <label htmlFor={props.for}>{props.text}</label>;
};

export default Label;
