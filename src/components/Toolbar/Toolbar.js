import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";

import "./Toolbar.css";

const Toolbar = ({ className, onNew }) => {
  const classes = classNames("Toolbar", className);
  return (
    <ul className={classes}>
      <li className="Toolbar-item is-selected">Home</li>
      <li className="Toolbar-item">Notifications</li>
      <li className="Toolbar-item">Messages</li>
      <li className="Toolbar-item Toolbar-item--right" onClick={onNew}>
        <Button>Fuse</Button>
      </li>
    </ul>
  );
};

Toolbar.defaultProps = {
  onNew() {}
};

export default Toolbar;
