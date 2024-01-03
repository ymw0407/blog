import Image from "next/image";

export const ImageClipRec = ({
  profileImageURL,
  width,
  height,
  alt = "Image",
}: {
  profileImageURL: string;
  width: string;
  height: string;
  alt?: string;
}) => {
  return (
    <div className={`inline-block relative`}>
      <Image
        src={profileImageURL}
        alt={`${alt}`}
        priority
        fill
        quality={100}
        className={`bg-clip-border`}
      ></Image>
    </div>
  );
};
