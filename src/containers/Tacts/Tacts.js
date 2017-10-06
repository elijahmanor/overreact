import React from "react";
import classNames from "classnames";
import Tact from "../../components/Tact/Tact";
import { subMinutes } from "date-fns";

import "./Tacts.css";

class Tacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tacts: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3001/tacts")
      .then(response => response.json())
      .then(tacts => this.setState({ tacts }));
  }

  render() {
    const classes = classNames("Tacts", this.props.className);

    return <div className={classes}>
      {this.state.tacts.map(tact => <Tact key={tact.id} { ...tact } />)}
    </div>;
  }
};

export default Tacts;