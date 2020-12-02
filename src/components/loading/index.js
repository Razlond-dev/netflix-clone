import React from "react";
import { LockBody, Picture, ReleaseBody, Spinner } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner data-testid="loading">
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
}

Loading.RealeaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
