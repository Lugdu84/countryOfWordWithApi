import React from "react";
import Button from "react-bootstrap/esm/Button";
import classes from "./Bouton.module.scss";

const component = (props) => {
  return (
    <Button
      variant="info"
      onClick={props.click}
      className={classes.style}
      style={props.continentIsSelected ? {opacity: 1} : {opacity: 0.7}}
    >{props.children}</Button>
  );
}

export default component;
