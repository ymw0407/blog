export const Title = ({
  title1,
  title2,
  textColor = {
    from: "from-darkblue_0",
    to: "to-darkblue_4",
  },
}: {
  title1: string;
  title2: string;
  textColor?: {
    from: string;
    to: string;
  };
}) => {
  return (
    <div
      className={`inline-block text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br ${textColor.from} ${textColor.to} `}
    >
      <p>{title1}</p>
      <p>{title2}</p>
    </div>
  );
};
