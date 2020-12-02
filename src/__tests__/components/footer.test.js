import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Footer } from "../../components";

describe("<Footer />", () => {
  it("renders the <Footer /> with populated data", () => {
    const { container, getByText, queryByTestId } = render(
      <Footer>
        <Footer.Title>Questions?</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">More information</Footer.Link>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Help</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact us</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Gift Cards </Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Events</Footer.Link>
            <Footer.Link href="#">New Films</Footer.Link>
            <Footer.Link href="#">Top 100</Footer.Link>
            <Footer.Link href="#">Our Products</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>Netflix United Kingdom</Footer.Text>
      </Footer>
    );

    expect(getByText("FAQ")).toBeTruthy();
    expect(getByText("Investor Relations")).toBeTruthy();
    expect(getByText("Netflix Originals")).toBeTruthy();
    expect(getByText("Contact us")).toBeTruthy();
    expect(getByText("Legal Notices")).toBeTruthy();
    expect(getByText("Events")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
