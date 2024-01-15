import { BrandType } from "@/constants/brand";
import { BrandRectButton } from "@/components/atoms/brandRectButton";
import { BrandSquareButton } from "@/components/atoms/brandSquareButton";

export const Brand = ({
  brandRectList,
  brandSquareList,
}: {
  brandRectList: BrandType[];
  brandSquareList: BrandType[];
}) => {
  return (
    <>
      {brandRectList.map((brand, index) => {
        return (
          <BrandRectButton
            brandName={brand}
            key={`BrandRectButton ${brand + index}`}
          />
        );
      })}
      {brandSquareList.map((brand, index) => {
        return (
          <BrandSquareButton
            brandName={brand}
            key={`BrandSquareButton ${brand + index}`}
          />
        );
      })}
    </>
  );
};
