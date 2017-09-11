import React from "react";
import classNames from "classnames";

import "./Toolbar.css";

export default ({ className }) => {
  const classes = classNames("Toolbar", className);
  return (
    <ul className={classes}>
      <li className="Toolbar-item is-selected">Home</li>
      <li className="Toolbar-item">Notifications</li>
      <li className="Toolbar-item">Messages</li>
    </ul>
  );
};
