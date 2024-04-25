import React from "react";

export function Challenges({ challenges }: { challenges: any[] }) {
  return challenges.map((Challenge, idx) => (
    <React.Fragment key={idx}>
      <br />
      <hr />
      <Challenge />
    </React.Fragment>
  ));
}
