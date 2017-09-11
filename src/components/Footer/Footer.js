import React from "react";
import classNames from "classnames";

import "./Footer.css";

export default ({ className }) => {
  const classes = classNames("Footer", className);
  return <div className={classes}>Footer</div>;
};
