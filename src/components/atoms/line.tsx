export const Line = ({
  subTitle,
  textColor = "text-darkblue_4",
}: {
  subTitle: string;
  textColor?: string;
}) => {
  return (
    <p
      className={`inline-block ${textColor} text-3xl font-normal text-opacity-70`}
    >
      {subTitle}
    </p>
  );
};
