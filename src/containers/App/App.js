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

class UserInfo extends Component {
  state = { user: {} };
  componentDidMount() {
    getUser().then(user => this.setState({ user }));
  }
  render() {
    return this.props.children(this.state.user);
  }
}

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
    // <WrappedProfile className="App-profile" />
    return (
      <div className="App">
        <Toolbar className="App-toolbar" onNew={this.handleNew} />
        <UserInfo>{user => <Profile className="App-profile" user={user} />}</UserInfo>
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
