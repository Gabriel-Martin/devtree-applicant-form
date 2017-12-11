import React from "react";

const Button = props => {
  return (
    <button style={styles} onClick={props.onClick}>
      {props.label || "Button"}
    </button>
  );
};

export default Button;

const styles = {
  outline: 0,
  color: "white",
  padding: "10px",
  margin: "5px 0px",
  border: "1px solid #fff",
  backgroundColor: "rgba(0, 150, 200, 1)",
  fontFamily: "Verdana, Geneva, sans-serif",
  boxShadow: "0px 0px 5px 2px rgb(240, 240, 240)"
};
