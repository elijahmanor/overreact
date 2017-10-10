import React from "react";
import md5 from "md5";
import { format, formatDistanceStrict } from "date-fns";
import PropTypes from "prop-types";
import TactActions from "./TactActions";

import "./Tact.css";

const Tact = ({ id, date, userName, fullName, avatar, email, message, favorite }) => {
  const url = avatar || `https://www.gravatar.com/avatar/${md5(email)}`;

  return <div className="Tact">
    <img className="Tact-avatar" alt={`${fullName}'s Avatar`} src={url} />
    <article className="Tact-body">
      <header className="Tact-header">
        <div className="Tact-fullName">{fullName}</div>
        <span>&nbsp;</span>
        <div className="Tact-userName">@{userName}</div>
        <span>&nbsp;—&nbsp;</span>
        <div className="Tact-date" title={format(new Date(date), "LLL")}>{formatDistanceStrict(new Date(date), new Date())}</div>
      </header>
      <div className="Tact-message">{message}</div>
      <TactActions id={id} userName={userName} favorite={favorite} />
    </article>
  </div>;
};

Tact.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  userName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired
};

export default Tact;
