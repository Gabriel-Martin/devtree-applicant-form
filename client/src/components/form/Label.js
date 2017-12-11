import React from "react";

const Label = props => {
  return (
    <label style={styles} htmlFor={props.for}>
      {props.text}
    </label>
  );
};

export default Label;

const styles = {
  fontFamily: "Verdana, Geneva, sans-serif",
  padding: "0px 5px"
};
