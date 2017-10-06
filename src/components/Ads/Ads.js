import React from "react";
import classNames from "classnames";

import "./Ads.css";

export default ({ className }) => {
  const classes = classNames("Ads", className);
  return <div className={classes}>
    <img className="Ads-avatar" alt="egghead.io" src="https://pbs.twimg.com/profile_images/735242324293210112/H8YfgQHP_400x400.jpg" />
    <span className="Ads-body">High quality, concise web development screencasts. Coding with expert open-source contributors. Let’s make the web better.</span>
    <p><a href="https://egghead.io/lessons">egghead.io/lessons</a></p>
  </div>;
};
