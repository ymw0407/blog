import { BrandType, brands } from "@/constants/brand";
import Image from "next/image";
import Link from "next/link";

export const BrandRectButton = ({ brandName }: { brandName: BrandType }) => {
  const brand = brands[brandName];

  return (
    <span className="inline-block pr-3 py-2">
      <Link href={`${brand.href}`}>
        <span className="flex justify-center items-center border-darkblue_4 border-2 hover:bg-darkblue_0 h-16 w-56 rounded-[3rem]">
          <Image
            src={`${brand.imageSrc}`}
            alt={`brand-${brand.brandName}`}
            priority
            width={40}
            height={40}
          />
          <p className="px-2 font-bold text-2xl">{brand.brandName}</p>
        </span>
      </Link>
    </span>
  );
};
