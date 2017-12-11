import React from "react";

const styles = {
  border: "1px solid rgb(240, 240, 240)",
  margin: "5px 2px",
  height: 40,
  fontSize: 24,
  borderRadius: "5px",
  boxShadow: "0px 0px 5px 2px rgb(240, 240, 240)"
};

const TextInput = props => {
  return (
    <input
      style={styles}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={"text"}
      name={props.name}
    />
  );
};

export default TextInput;
