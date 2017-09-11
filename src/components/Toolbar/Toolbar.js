import React from "react";
import classNames from "classnames";

import "./Toolbar.css";

export default ({ className }) => {
  const classes = classNames("Toolbar", className);
  return (
    <div className={classes}>
      <div className="Toolbar-home">Home</div>
      <div className="Toolbar-notifications">Notifications</div>
      <div className="Toolbar-messages">Messages</div>
    </div>
  );
};
