import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import { WithNotes } from "@storybook/addon-notes";
import { withKnobs, text, date } from "@storybook/addon-knobs";
import Tact from "../components/Tact/Tact";

import "../index.css";

storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);

storiesOf("Button", module)
  .add("with Avatar", () => <button>Hi</button>)
  .add("with Email", () => <button>Hey</button>);

const tactStories = storiesOf("Tact", module);
tactStories.addDecorator(withKnobs);
tactStories.add("with Avatar", () =>
  <WithNotes notes="This uses a hardcoded avatar for the image source">
    <Tact
      date={date("date", new Date())}
      userName={text("userName", "elijahmanor")}
      fullName={text("fullName", "Elijah Manor")}
      message={text("message", "Hello, World!")}
      avatar={text("avatar", "https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg")} />
  </WithNotes>
);
tactStories.add("with Email", () => <Tact date={new Date().toJSON()} userName="elijahmanor" fullName="Elijah Manor" message="Hello, World!" email="elijah.manor@gmail.com" />);
