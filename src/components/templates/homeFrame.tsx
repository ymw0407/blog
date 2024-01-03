import { ImageClipRec } from "@/components/atoms/imageClipRec";
import { SubTitle } from "@/components/atoms/subTitle";
import { Title } from "@/components/atoms/title";

export const HomeFrame = ({}: {}) => {
  return (
    <>
      <div className="flex pt-14 px-16 justify-between">
        <div className="pt-5">
          <SubTitle subTitle={"LIFETIME OF"} />
          <br />
          <Title title1={"Yun"} title2={"Minwoo"} />
        </div>
        <ImageClipRec
          imageURL={"/testImage.JPG"}
          width={"38rem"}
          height={"43rem"}
          className={"rounded-xl shadow-xl"}
        />
      </div>
    </>
  );
};
