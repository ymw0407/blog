import { Title } from "@/components/atoms/home/title";
import { SubTitle } from "@/components/atoms/home/subTitle";
import { Line } from "@/components/atoms/line";
import { HomeDescription } from "../../atoms/home/description";

export const HomeText = ({
  subTitle,
  title: { title1, title2 },
  description,
}: {
  subTitle: string;
  title: { title1: string; title2: string };
  description: string;
}) => {
  return (
    <div className="">
      <div>
        <SubTitle subTitle={subTitle} />
        <br />
        <Title title1={title1} title2={title2} />
      </div>
      <div className="pt-6">
        <Line />
      </div>
      <div className="pt-12">
        <HomeDescription description={description} />
      </div>
    </div>
  );
};
