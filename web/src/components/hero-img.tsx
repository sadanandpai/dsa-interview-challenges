import Image from 'next/image';

export const HeroImg = () => {
  return (
    <Image
      src="/programmer.svg"
      alt="hero banner"
      width={400}
      height={350}
      style={{
        margin: 'auto',
        marginTop: '4rem',
        marginBottom: '4rem',
      }}
    />
  );
};
