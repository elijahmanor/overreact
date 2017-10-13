import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import FuseActions from "./FuseActions";

describe("FuseActions", () => {
  beforeEach(() => {});

  it("renders unfavorited", () => {
    const tree = renderer.create(<FuseActions id={1} userName="johnsmith" favorite={false} />);
    expect(tree).toMatchSnapshot();
  });

  it("renders favorited", () => {
    const tree = renderer.create(<FuseActions id={1} userName="johnsmith" favorite={true} />);
    expect(tree).toMatchSnapshot();
  });
});
