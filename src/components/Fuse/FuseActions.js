import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Fuse.css";

const FuseActions = ({ id, userName, bomb, onReply, onBomb }) => {
  const classes = classNames("fa fa-bomb", {
    "is-active": bomb
  });
  onBomb = onBomb.bind(null, { id, bomb: !bomb });
  return (
    <div className="FuseActions">
      <button className="FuseActions-action" onClick={onReply}>
        <i className="fa fa-comment-o" aria-hidden="true" />
      </button>
      <button className="FuseActions-action is-active" onClick={onBomb}>
        <i className={classes} aria-hidden="true" />
      </button>
    </div>
  );
};

FuseActions.propTypes = {
  id: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  bomb: PropTypes.bool.isRequired,
  onReply: PropTypes.func,
  onBomb: PropTypes.func
};

FuseActions.defaultProps = {
  onReply: () => {},
  onBomb: () => {}
};

export default FuseActions;
