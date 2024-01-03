export const Title = ({
  title1,
  title2,
}: {
  title1: string;
  title2: string;
}) => {
  return (
    <div
      className={`inline-block text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-darkblue_0 to-darkblue_4 `}
    >
      <p>{title1}</p>
      <p>{title2}</p>
    </div>
  );
};
