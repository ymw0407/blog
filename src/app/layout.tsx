import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { AppBar } from "@/components/organisms/appbar";

const inter = Inter({ subsets: ["latin"] });
const notoSansKr = Noto_Sans_KR({
  preload: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="overflow-hidden w-[100%] h-[100%] select-none">
      <body className={(inter.className, notoSansKr.className)}>
        <AppBar
          blogName={"MINWOO"}
          profileImageURL={
            "https://avatars.githubusercontent.com/u/77202633?v=4"
          }
          categories={["Home", "About", "Blog", "Portfolio"]}
        ></AppBar>
        {children}
      </body>
    </html>
  );
}
