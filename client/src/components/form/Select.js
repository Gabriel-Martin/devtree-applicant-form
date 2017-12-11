import React from "react";

const Select = props => {
  return (
    <select
      style={styles}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      <option style={styles} value={"3/19/18 - 6/8/18"}>
        3/19/18 - 6/8/18
      </option>
      <option style={styles} value={"6/11/18 - 8/31/18"}>
        6/11/18 - 8/31/18
      </option>
      <option style={styles} value={"9/3/18 - 11/28/18"}>
        9/3/18 - 11/28/18
      </option>
    </select>
  );
};

export default Select;

const styles = {
  fontSize: 24,
  margin: "5px 2px",
  borderRadius: "5px",
  border: "1px solid rgb(240, 240, 240)",
  fontFamily: "Verdana, Geneva, sans-serif",
  boxShadow: "0px 0px 5px 2px rgb(240, 240, 240)"
};
