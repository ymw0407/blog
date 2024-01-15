import { ImageClipRec } from "@/components/atoms/imageClipRec";
import { HomeText } from "@/components/molecules/home/homeText";
import { Brand } from "@/components/molecules/brand";
import { Carousel } from "../molecules/imageSlider";

const description = `개발, 출사, 피아노를 좋아하는 인간 “윤민우”의 일상을 담고 있는 Personal Website입니다.
해당 사이트는 Next.js/Octokit.js 기반의 템플릿으로, GitHub에 OpenSource로 공개되어 있습니다.
많은 관심 부탁드립니다.`;

const slides = [
  "/images/homeImageSlider/testImage.JPG",
  "/images/homeImageSlider/testImage.JPG",
  "/images/homeImageSlider/testImage.JPG",
  "/images/homeImageSlider/testImage.JPG",
  "/images/homeImageSlider/testImage.JPG",
  "/images/homeImageSlider/testImage.JPG",
];

export const HomeFrame = ({}: {}) => {
  return (
    <>
      <div className="flex pt-14 px-6 justify-between">
        <div className="pt-5 px-7">
          <HomeText
            subTitle={"LIFETIME OF"}
            title={{
              title1: "Yun",
              title2: "Minwoo",
            }}
            description={description}
          />
          <div className="py-14">
            <Brand
              brandRectList={["github"]}
              brandSquareList={["instagram", "linkedin", "gmail", "x"]}
            />
          </div>
        </div>
        {/* <ImageClipRec
          imageURL={"/images/homeImageSlider/testImage.JPG"}
          width={"55rem"}
          height={"48rem"}
          className={
            "rounded-xl shadow-2xl px-2 drop-shadow-lg pb-7 select-none"
          }
        /> */}
        <div className="max-w-[55rem] max-h-[48rem]">
          <Carousel autoSlide={false}>
            {[
              ...slides.map((s, i) => (
                <ImageClipRec
                  imageURL={s}
                  width={"55rem"}
                  height={"48rem"}
                  className={
                    ""
                    // "rounded-xl shadow-2xl px-2 drop-shadow-lg pb-7 select-none"
                  }
                  key={`test-${i}`}
                />
              )),
            ]}
          </Carousel>
        </div>
      </div>
    </>
  );
};
