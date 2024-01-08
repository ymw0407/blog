import Image from "next/image";
import { CSSProperties } from "react";

/*
 * Should be a Local Image File
 */
export const ImageClipRec = ({
  imageURL,
  width,
  height,
  className = "",
  alt = "Image",
}: {
  imageURL: string;
  width: string;
  height: string;
  className?: string;
  alt?: string;
}) => {
  const containerStyle: CSSProperties = {
    width,
    height,
    overflow: "hidden",
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
      className={`inline-block relative ${className}`}
      style={containerStyle}
    >
      <Image
        src={imageURL}
        alt={alt}
        priority
        quality={100}
        fill
        // className="bg-clip-border"
        sizes="43vw"
        style={imageStyle}
      />
    </div>
  );
};
