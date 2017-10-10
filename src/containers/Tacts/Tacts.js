import React from "react";
import classNames from "classnames";
import Tact from "../../components/Tact/Tact";

import "./Tacts.css";

class Tacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tacts: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3001/tacts?_sort=date&_order=desc")
      .then(response => response.json())
      .then(tacts => {
        tacts = tacts.map(tact => {
          tact.date = new Date(tact.date);
          return tact;
        });
        this.setState({ tacts })
      });
  }

  render() {
    const classes = classNames("Tacts", this.props.className);

    return <div className={classes}>
      {this.state.tacts.map(tact => <Tact key={tact.id} { ...tact } />)}
    </div>;
  }
};

export default Tacts;