import React from "react";
import classNames from "classnames";
import Tact from "../../components/Tact/Tact";

import "./Tacts.css";

const tactList = [
  { id: "1", date: +new Date(), from: "dougneiner", fullName: "Doug Neiner", email: "doug@dougneiner.com", message: "Look at what I just made!" },
  { id: "2", date: +new Date(), from: "ifandelse", fullName: "Jim Cowart", email: "jim@ifandelse.com", message: "Look at what I just ate!" }
];

export default ({ className }) => {
  const classes = classNames("Tacts", className);
  return <div className={classes}>
    { tactList.map( tact => <Tact key={ tact.id } { ...tact } /> ) }
  </div>;
};
