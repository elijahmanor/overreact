import React from "react";
import classNames from "classnames";
import { get } from "lodash";

import "./Profile.css";

export default ({ className, user }) => {
  const classes = classNames("Profile", className);
  const fullName = get(user, "name.formatted") || user.displayName;

  return (
    <div className={classes}>
      <div className="Profile-background" />
      <header className="Profile-header">
        <img className="Profile-avatar" src={user.thumbnailUrl} alt={fullName} />
        <div className="Profile-name">
          <div className="Profile-fullName">{fullName}</div>{" "}
          <div className="Profile-userName">@{user.preferredUsername}</div>
        </div>
      </header>
      <div className="Profile-bio" dangerouslySetInnerHTML={{ __html: user.aboutMe }} />
    </div>
  );
};
