import React from "react";
import classNames from "classnames";

import "./Ads.css";

export default ({ className }) => {
  const classes = classNames("Ads", className);
  return <div className={classes}>Ads</div>;
};
