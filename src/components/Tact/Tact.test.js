import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Tact from "./Tact";

describe("Tact", () => {
  it("renders with an avatar", () => {
    const tree = renderer.create(
      <Tact
        id={1}
        date={new Date()}
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
      <Tact
        id={1}
        date={new Date()}
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
