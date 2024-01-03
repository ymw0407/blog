import Link from "next/link";

export const BlogName = ({
  blogName,
  textColor = "text-darkblue_0",
}: {
  blogName: string;
  textColor?: string;
}) => {
  return (
    <Link href="/home">
      <p
        className={`inline-block text-xl ${textColor} font-black tracking-widest`}
      >
        {blogName}
      </p>
    </Link>
  );
};
