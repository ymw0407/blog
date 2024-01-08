import Link from "next/link";

export const BrandSquareButton = ({
  brand,
  link,
  textColor = "text-darkblue_0",
}: {
  brand: string;
  link: string;
  textColor?: string;
}) => {
  return (
    <Link href={`${link}`}>
      <p
        className={`inline-block text-xl ${textColor} font-black tracking-widest`}
      >
        {}
      </p>
    </Link>
  );
};
