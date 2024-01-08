"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CategoryList = ({
  categories,
  className = "",
  textColor = "text-darkblue_0",
}: {
  categories: string[];
  className?: string;
  textColor?: string;
}) => {
  const currentCategory = usePathname().split("/")[1] || "";
  return categories.map((category, index) => {
    return (
      <div key={`category[${index}]:${category}`} className={`${className}`}>
        <Link href={`/${category.toLowerCase()}`}>
          <p
            className={`inline-block text-xl ${textColor} ${
              category.toLowerCase() === currentCategory
                ? "font-semibold"
                : "font-light"
            } hover:font-semibold`}
          >
            {category}
          </p>
        </Link>
      </div>
    );
  });
};
