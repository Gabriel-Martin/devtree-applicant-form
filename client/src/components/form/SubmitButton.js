import React from "react";

const styles = {
  border: "1px solid magenta",
  padding: "10px",
  margin: "10px",
  width: "820px",
  borderRadius: "10px",
  boxShadow: "0px 0px 12px 2px lightblue",
  backgroundColor: "rgba(0,120,120,.8)",
  color: "white"
};

const SubmitButton = props => {
  return (
    <button style={styles} type={"submit"}>
      Submit
    </button>
  );
};

export default SubmitButton;
