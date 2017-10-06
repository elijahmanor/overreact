import React from "react";
import md5 from "md5";
import { format, formatDistance, formatDistanceStrict } from "date-fns";
import PropTypes from "prop-types";

import "./Tact.css";

const Tact = ({ date, from, fullName, avatar, email, message }) => {
  const url = avatar || `https://www.gravatar.com/avatar/${md5(email)}`;

  return <div className="Tact">
    <img className="Tact-avatar" src={url} />
    <article className="Tact-body">
      <header className="Tact-header">
        <div className="Tact-fullName">{fullName}</div>
        <span>&nbsp;</span>
        <div className="Tact-userName">@{userName}</div>
        <span>&nbsp;—&nbsp;</span>
        <div className="Tact-date" title={format(new Date(date), "LLL")}>{formatDistanceStrict(new Date(date), new Date())}</div>
      </header>
      <div className="Tact-message">{message}</div>
    </article>
  </div>;
};

Tact.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  userName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string.isRequired
};

export default Tact;
