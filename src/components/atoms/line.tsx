export const Line = ({
  w = "w-48",
  h = "h-2",
  bgColor = "bg-darkblue_4",
  className = "",
}: {
  w?: string;
  h?: string;
  bgColor?: string;
  className?: string;
}) => {
  return <div className={`${w} ${h} ${bgColor} ${className}`} />;
};
