import React from "react";
import classNames from "classnames";
import md5 from "md5";
import {format, formatDistance, formatDistanceStrict} from "date-fns";

import "./Tact.css";

export default ({ className, id, date, from, fullName, email, message }) => {
  const classes = classNames("Tact", className);
  const hash = md5(email);

  return <div className={classes}>
    <img className="Tact-avatar" src={`https://www.gravatar.com/avatar/${hash}`} />
    <article className="Tact-body">
      <header className="Tact-header">
        <div className="Tact-fullName">{fullName}</div>
        <span>&nbsp;</span>
        <div className="Tact-username">@{from}</div>
        <span>&nbsp;—&nbsp;</span>
        <div className="Tact-date" title={format(new Date(date), "LLL")}>{formatDistanceStrict(new Date(date), new Date())}</div>
      </header>
      <div className="Tact-message">{message}</div>
    </article>
  </div>;
};
