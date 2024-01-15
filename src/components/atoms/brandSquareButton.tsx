import { BrandType, brands } from "@/constants/brand";
import Image from "next/image";
import Link from "next/link";

export const BrandSquareButton = ({ brandName }: { brandName: BrandType }) => {
  const brand = brands[brandName];

  return (
    <span className="inline-block px-3 py-2">
      <Link href={`${brand.href}`}>
        <span className="size-16 rounded-2xl grid place-items-center border-darkblue_4 border-2 hover:bg-darkblue_0">
          <Image
            src={`${brand.imageSrc}`}
            alt={`brand-${brand.brandName}`}
            priority
            width={36}
            height={36}
          />
        </span>
      </Link>
    </span>
  );
};
