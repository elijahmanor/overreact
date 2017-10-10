import React from "react";
import PropTypes from "prop-types";

import "./Tact.css";

const TactActions = ({ id, userName, favorite }) => {
  return <div className="TactActions">
    <button className="TactActions-action"><i className="fa fa-comment-o" aria-hidden="true"></i></button>
    <button className="TactActions-action"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
    <button className="TactActions-action is-active"><i className="fa fa-heart" aria-hidden="true"></i></button>
  </div>;
};

TactActions.propTypes = {
  id: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired
};

export default TactActions;
