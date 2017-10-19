import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Profile from "../../components/Profile/Profile";
import Fuses from "../../components/Fuses/Fuses";
import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import Compose from "../../components/Compose/Compose";
import { getUser } from "../../services/user";
import { getFuses, updateFuse, addFuse } from "../../services/fuse";

import "../../index.css";
import "./App.css";

const getUserInfo = WrappedComponent => {
  return class GetUserInfo extends Component {
    state = { user: {} };
    componentDidMount() {
      getUser().then(user => this.setState({ user }));
    }
    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

const WrappedProfile = getUserInfo(Profile);

export default class App extends Component {
  state = {
    user: {},
    fuses: [],
    showModal: false
  };
  componentDidMount() {
    this.fetchFuses();
  }
  fetchFuses = () => {
    getFuses().then(fuses => this.setState({ fuses }));
  };
  handleBomb = ({ id, bomb }, e) => {
    updateFuse({ id, bomb }).then(this.fetchFuses);
  };
  handleNew = () => {
    this.setState({ showModal: true });
  };
  handleCompose = message => {
    addFuse({
      message,
      user: this.state.user
    }).then(this.fetchFuses);
    this.setState({ showModal: false });
  };
  handleClose = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { user, fuses, showModal } = this.state;
    return (
      <div className="App">
        <Toolbar className="App-toolbar" onNew={this.handleNew} />
        <WrappedProfile className="App-profile" />
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
