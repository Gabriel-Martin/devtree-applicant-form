import React from "react";

const styles = {
  border: "5px dashed purple",
  width: "800px"
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
