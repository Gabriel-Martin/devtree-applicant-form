import React from "react";

const styles = {
  border: "1px solid magenta",
  padding: "10px",
  margin: "10px",
  width: "800px",
  borderRadius: "10px",
  boxShadow: "0px 0px 12px 2px lightblue"
};

const TextInput = props => {
  return (
    <input
      style={styles}
      onChange={props.inputChange}
      placeholder={props.placeholder}
      type={"text"}
      name={props.name}
    />
  );
};

export default TextInput;
