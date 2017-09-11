import React from "react";
import classNames from "classnames";

import "./Profile.css";

export default ({ className, user }) => {
  const classes = classNames("Profile", className);
  return (
    <div className={classes}>
      <div className="Profile-background"></div>
      <header className="Profile-header">
        <img className="Profile-avatar" src={user.thumbnailUrl} alt={user.name.formatted} />
        <div className="Profile-name">
          <div className="Profile-fullName">{user.name.formatted}</div>
          {" "}
          <div className="Profile-userName">@{user.preferredUsername}</div>
        </div>
      </header>
      <div className="Profile-bio" dangerouslySetInnerHTML={{__html: user.aboutMe}} />
    </div>
  );
};
