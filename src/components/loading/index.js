import React from "react";
import { LockBody, Picture, ReleaseBody, Spinner } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Picture  src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.RealeaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
