export const HomeDescription = ({
  description,
  textColor = "text-darkblue_3",
}: {
  description: string;
  textColor?: string;
}) => {
  return (
    <div className="w-[50rem]">
      <p
        className={`inline-block text-2xl whitespace-pre-wrap break-words w-auto ${textColor} font-medium pr-16`}
      >
        {description}
      </p>
    </div>
  );
};
