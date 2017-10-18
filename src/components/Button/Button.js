import React from "react";
import classNames from "classnames";

import "./Button.css";

const Button = props => {
  const classes = classNames("Button", props.className, {
    "is-disabled": props.disabled
  });
  return <button className={classes} {...props} />;
};

export default Button;
