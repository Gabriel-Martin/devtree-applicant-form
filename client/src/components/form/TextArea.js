import React from "react";

const TextArea = props => {
  return (
    <textarea
      rows={"10"}
      cols={"30"}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default TextArea;
