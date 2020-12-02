import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "../../components";

describe("<Loading />", () => {
  it("renders the <Loading /> component", () => {
    const { container, getByTestId } = render(
      <Loading src="/images/karl.png" />
    );

    expect(getByTestId("loading-picture")).toBeTruthy();
    expect(getByTestId("loading")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
  it("render the <Loading.ReleaseBody />", () => {
    const { container } = render(<Loading.RealeaseBody />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
