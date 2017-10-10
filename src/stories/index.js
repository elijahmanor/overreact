import React from "react";

import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import { WithNotes } from "@storybook/addon-notes";
import { withKnobs, text, date } from "@storybook/addon-knobs";
import Tact from "../components/Tact/Tact";
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);

import "../index.css";

storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);

const tactStories = storiesOf("Tact", module);
tactStories.addDecorator(withKnobs);
tactStories.addWithJSX("with Avatar", () => (
  <Tact
    date={date("date", new Date())}
    userName={text("userName", "elijahmanor")}
    fullName={text("fullName", "Elijah Manor")}
    message={text("message", "Hello, World!")}
    avatar={text("avatar", "https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg")}
  />
));
tactStories.addWithJSX("with Email", () => (
  <Tact
    date={date("date", new Date())}
    userName={text("userName", "elijahmanor")}
    fullName={text("fullName", "Elijah Manor")}
    message={text("message", "Hello, World!")}
    email={text("email", "elijah.manor@gmail.com")}
  />
));
