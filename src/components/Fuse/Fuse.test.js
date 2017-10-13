import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Fuse from "./Fuse";

describe("Fuse", () => {
  beforeEach(() => {
    const NOW = new Date("2017-10-10T00:00:00");
    global.Date = jest.fn(() => NOW);
  });

  it("renders with an avatar", () => {
    const tree = renderer.create(
      <Fuse
        id={1}
        date={new Date("2017-10-10T10:10:10")}
        userName="johnsmith"
        fullName="John Smith"
        avatar="http://avatar.com/me.png"
        message="Hello World!"
        favorite={false}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it("renders with an email", () => {
    const tree = renderer.create(
      <Fuse
        id={1}
        date={new Date("2017-10-10T10:10:10")}
        userName="johnsmith"
        fullName="John Smith"
        avatar="http://avatar.com/me.png"
        message="Hello World!"
        favorite={false}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
