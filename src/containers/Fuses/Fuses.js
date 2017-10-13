import React from "react";
import classNames from "classnames";
import Fuse from "../../components/Fuse/Fuse";

import "./Fuses.css";

class Fuses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fuses: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3001/fuses?_sort=date&_order=desc")
      .then(response => response.json())
      .then(fuses => {
        fuses = fuses.map(fuse => {
          fuse.date = new Date(fuse.date);
          return fuse;
        });
        this.setState({ fuses });
      });
  }

  render() {
    const classes = classNames("Fuses", this.props.className);

    return (
      <div className={classes}>
        {this.state.fuses.map(fuse => <Fuse key={fuse.id} {...fuse} />)}
      </div>
    );
  }
}

export default Fuses;
