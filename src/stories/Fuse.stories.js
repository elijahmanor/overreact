import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import { WithNotes } from "@storybook/addon-notes";
import { withKnobs, text, date, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";

import Fuse from "../components/Fuse/Fuse";

setAddon(JSXAddon);

const stories = storiesOf("Fuse", module);
stories.addDecorator(withKnobs);

const now = new Date();

stories.addWithJSX("with Avatar", () => (
  <Fuse
    id={123}
    date={date("date", now)}
    userName={text("userName", "elijahmanor")}
    fullName={text("fullName", "Elijah Manor")}
    message={text("message", "Hello, World!")}
    bomb={boolean("bomb", false)}
    onBomb={action("onBomb")}
    avatar={text("avatar", "https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg")}
  />
));

stories.addWithJSX("with Email", () => (
  <Fuse
    id={321}
    date={date("date", now)}
    userName={text("userName", "elijahmanor")}
    fullName={text("fullName", "Elijah Manor")}
    message={text("message", "Hello, World!")}
    bomb={boolean("bomb", true)}
    onBomb={action("onBomb")}
    email={text("email", "elijah.manor@gmail.com")}
  />
));
