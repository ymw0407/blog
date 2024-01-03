import Image from "next/image";
import { CSSProperties } from "react";

export const ProfileImage = ({
  profileImageURL,
  imageSize = "size-10",
}: {
  profileImageURL: string;
  imageSize?: string;
}) => {
  const containerStyle: CSSProperties = {
    paddingBottom: "100%", // 유지할 이미지 비율에 맞춰 조정
    position: "relative",
  };

  const imageStyle: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  return (
    <div
      className={`inline-block ${imageSize} relative`}
      style={containerStyle}
    >
      <Image
        src={profileImageURL}
        alt={"User's GitHub Profile Image"}
        priority
        fill
        className={`bg-clip-border rounded-full`}
        style={imageStyle}
      />
    </div>
  );
};
