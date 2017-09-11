import React from "react";
import classNames from "classnames";
import Tact from "../../components/Tact/Tact";
import {subMinutes} from "date-fns";

import "./Tacts.css";

const tactList = [
  { id: "1", date: subMinutes(new Date(), 1), from: "dougneiner", fullName: "Doug Neiner", email: "doug@dougneiner.com", message: "Look at my woodworking video!" },
  { id: "2", date: subMinutes(new Date(), 2), from: "ifandelse", fullName: "Jim Cowart", email: "jim@ifandelse.com", message: "Look at my hot calzone!" },
  { id: "3", date: subMinutes(new Date(), 3), from: "robertreaves", fullName: "Robert Reaves", email: "robert.reaves@leankit.com", message: "Look at my long hair!" }
];

export default ({ className }) => {
  const classes = classNames("Tacts", className);
  return <div className={classes}>
    { tactList.map( tact => <Tact key={ tact.id } { ...tact } /> ) }
  </div>;
};
