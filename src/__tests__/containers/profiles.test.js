import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Player } from "../../components";
import { SelectProfileContainer } from "../../containers/profiles";

jest.mock('react-router-dom')

describe("<Profiles />", () => {
  it("renders the <Profiles /> ", () => {
    const user = { displayName: 'Nazar', photoURL: 'profile.png'}
    const setProfile = jest.fn()
    const { getByTestId } = render(
      <SelectProfileContainer user={user} setProfile={setProfile} />
    );

    fireEvent.click(getByTestId('user-profile'))
    expect((setProfile)).toHaveBeenCalled()
   
  });
});
