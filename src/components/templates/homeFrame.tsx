import { ImageClipRec } from "@/components/atoms/imageClipRec";
import { SubTitle } from "@/components/atoms/home/subTitle";
import { Title } from "@/components/atoms/home/title";
import { HomeText } from "@/components/molecules/home/homeText";

const description = `개발, 출사, 피아노를 좋아하는 인간 “윤민우”의 일상을 담고 있는 Personal Website입니다.
해당 사이트는 Next.js/Octokit.js 기반의 템플릿으로, GitHub에 OpenSource로 공개되어 있습니다.
많은 관심 부탁드립니다.`;

export const HomeFrame = ({}: {}) => {
  return (
    <>
      <div className="flex pt-14 px-6 justify-between">
        <HomeText
          subTitle={"LIFETIME OF"}
          title={{
            title1: "Yun",
            title2: "Minwoo",
          }}
          description={description}
        />
        <ImageClipRec
          imageURL={"/testImage.JPG"}
          width={"55rem"}
          height={"48rem"}
          className={
            "rounded-xl shadow-2xl px-2 drop-shadow-lg pb-7 select-none"
          }
        />
      </div>
    </>
  );
};
