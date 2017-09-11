import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Profile from "../../components/Profile/Profile";
import Tacts from "../Tacts/Tacts";
import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import faker from "faker";
import jsonp from "jsonp";
import md5 from "md5";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = { user: {
      thumbnailUrl: "",
      name: { formatted: "" },
      preferredUsername: "",
      aboutMe: ""
    } };
  }
  componentDidMount() {
    let user = {};
    let email = window.localStorage["email"];
    if (!email) {
      email = window.prompt("What is your e-mail address?");
      if (email) {
        window.localStorage["email"] = email;
      } else {
        user = faker.helpers.contextualCard();
        const bio = faker.lorem.sentence();
        user.bio = bio;
        email = user.email;
        this.setState({ user });
      }
    }
    const hash = md5(email);
    jsonp(`https://www.gravatar.com/${hash}.json`, null, (err, data) => {
      console.log("jsonp", { err, data });
      if (err) {
        console.error(err.message);
      } else {
        this.setState({ user: data.entry[0] });
      }
    });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Toolbar className="App-toolbar" />
        <Profile className="App-profile" user={user} />
        <Tacts className="App-list" />
        <Ads className="App-ads" />
        <Footer className="App-footer" />
      </div>
    );
  }
}
