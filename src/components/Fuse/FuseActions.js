import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Fuse.css";

const FuseActions = ({ id, userName, favorite, onReply, onFavorite }) => {
  const classes = classNames("fa fa-bomb", {
    "is-active": favorite
  });
  onFavorite = onFavorite.bind(null, { id, favorite: !favorite });
  return (
    <div className="FuseActions">
      <button className="FuseActions-action" onClick={onReply}>
        <i className="fa fa-comment-o" aria-hidden="true" />
      </button>
      <button className="FuseActions-action is-active" onClick={onFavorite}>
        <i className={classes} aria-hidden="true" />
      </button>
    </div>
  );
};

FuseActions.propTypes = {
  id: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  onReply: PropTypes.func,
  onFavorite: PropTypes.func
};

FuseActions.defaultProps = {
  onReply: () => {},
  onFavorite: () => {}
};

export default FuseActions;
