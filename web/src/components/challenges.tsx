import React, { ComponentType } from 'react';

export function Challenges({ challenges }: { challenges: ComponentType[] }) {
  return challenges.map((Challenge, idx) => (
    <React.Fragment key={idx}>
      <br />
      <hr />
      <Challenge />
    </React.Fragment>
  ));
}
