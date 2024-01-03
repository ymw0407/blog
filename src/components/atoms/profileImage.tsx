import Image from "next/image";

export const ProfileImage = ({
  profileImageURL,
  imageSize = "size-10",
}: {
  profileImageURL: string;
  imageSize?: string;
}) => {
  return (
    <div className={`inline-block ${imageSize} relative`}>
      <Image
        src={profileImageURL}
        alt={"User's GitHub Profile Image"}
        priority
        fill
        className={`bg-clip-border rounded-full`}
      ></Image>
    </div>
  );
};
