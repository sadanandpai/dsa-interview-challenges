export function Challenges({ challenges }: { challenges: any[] }) {
  return challenges.map((Challenge, idx) => <Challenge key={idx} />);
}
