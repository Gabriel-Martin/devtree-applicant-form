import React from "react";

const TextArea = props => {
  return (
    <textarea
      style={styles}
      rows={props.rows}
      cols={props.cols}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default TextArea;

const styles = {
  fontSize: 24,
  margin: "5px 2px",
  borderRadius: "5px",
  border: "1px solid rgb(240, 240, 240)",
  boxShadow: "0px 0px 5px 2px rgb(240, 240, 240)"
};
