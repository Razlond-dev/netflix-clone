import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Signup } from "../../pages";
import { FirebaseContext } from "../../context/firebase";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve("I am signed up!")),
        },
      })
    ),
  })),
};

describe("<Signup />", () => {
  it("renders the sign up page with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signup />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText("First name"), {
        target: { value: "Nazar" },
      });
      await fireEvent.change(getByPlaceholderText("Email address"), {
        target: { value: "nazar.pidhirnyi@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: "test1234" },
      });
      fireEvent.click(getByTestId("sign-up"));

      expect(getByPlaceholderText("First name").value).toBe("Nazar");
      expect(getByPlaceholderText("Email address").value).toBe(
        "nazar.pidhirnyi@gmail.com"
      );
      expect(getByPlaceholderText("Password").value).toBe("test1234");
      expect(queryByTestId("error-sign-up")).toBeFalsy();
    });
  });
});
