import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Profile from "../../components/Profile/Profile";
import Fuses from "../../components/Fuses/Fuses";
import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import { getUser } from "../../services/user";
import { getFuses, updateFuse, addFuse } from "../../services/fuse";

import Compose from "../../components/Compose/Compose";

import "../../index.css";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      fuses: [],
      showModal: false
    };
    this.handleNew = this.handleNew.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCompose = this.handleCompose.bind(this);
    this.handleBomb = this.handleBomb.bind(this);
    this.fetchFuses = this.fetchFuses.bind(this);
  }
  componentDidMount() {
    getUser().then(user => this.setState({ user }));
    this.fetchFuses();
  }
  fetchFuses() {
    getFuses().then(fuses => this.setState({ fuses }));
  }
  handleBomb({ id, bomb }, e) {
    updateFuse({ id, bomb }).then(this.fetchFuses);
  }
  handleNew() {
    this.setState({ showModal: true });
  }
  handleCompose(message) {
    addFuse({
      message,
      user: this.state.user
    }).then(this.fetchFuses);
    this.setState({ showModal: false });
  }
  handleClose() {
    this.setState({ showModal: false });
  }
  render() {
    const { user, fuses, showModal } = this.state;
    return (
      <div className="App">
        <Toolbar className="App-toolbar" onNew={this.handleNew} />
        <Profile className="App-profile" user={user} />
        <Fuses className="App-list" fuses={fuses} onBomb={this.handleBomb} />
        <Ads className="App-ads" />
        <Footer className="App-footer" />
        <Compose
          isOpen={showModal}
          fuse={""}
          onCompose={this.handleCompose}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}
