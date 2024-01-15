// interface Brand {
//   brandName: string;
//   imageSrc: string;
//   href?: string;
// }

// export const brands: Brand[] = [
//   {
//     brandName: "github",
//     imageSrc: "svgs/brand/github.svg",
//     href: "https://github.com/",
//   },
//   {
//     brandName: "gmail",
//     imageSrc: "svgs/brand/gmail.svg",
//     href: "mailto:",
//   },
//   {
//     brandName: "instagram",
//     imageSrc: "svgs/brand/instagram.svg",
//     href: "https://instagram.com/",
//   },
//   {
//     brandName: "linkedin",
//     imageSrc: "svgs/brand/linkedin.svg",
//     href: "https://linkedin.com/in/",
//   },
//   {
//     brandName: "x",
//     imageSrc: "svgs/brand/x.svg",
//     href: "https://twitter.com/",
//   },
// ];

export const brands = {
  github: {
    brandName: "GitHub",
    imageSrc: "svgs/brand/github.svg",
    href: "https://github.com/",
  },
  gmail: {
    brandName: "Gmail",
    imageSrc: "svgs/brand/gmail.svg",
    href: "mailto:",
  },
  instagram: {
    brandName: "Instagram",
    imageSrc: "svgs/brand/instagram.svg",
    href: "https://instagram.com/",
  },
  linkedin: {
    brandName: "LinkedIn",
    imageSrc: "svgs/brand/linkedin.svg",
    href: "https://linkedin.com/in/",
  },
  x: {
    brandName: "X",
    imageSrc: "svgs/brand/x.svg",
    href: "https://twitter.com/",
  },
};

export type BrandType = "github" | "gmail" | "instagram" | "linkedin" | "x";
