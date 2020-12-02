import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock('react-router-dom')

describe("Home page", () => {
  it("renders the homepage", () => {
    const { getByText, getByPlaceholderText, getAllByText, getAllByPlaceholderText } = render(
      <Home />
    );
expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy()
expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy()
expect(getAllByText('Enter your email to create your membership!')).toBeTruthy()
expect(getAllByPlaceholderText('Email address')).toBeTruthy()
 });
});
