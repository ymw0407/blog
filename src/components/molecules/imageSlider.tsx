"use client";

import { ImageClipRec } from "../atoms/imageClipRec";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

// export const ImageSlider = () => {
//   // <div className="slide">
//   //   <ImageClipRec
//   //     imageURL={"/images/homeImageSlider/testImage.JPG"}
//   //     width={"55rem"}
//   //     height={"48rem"}
//   //     className={"rounded-xl shadow-2xl px-2 drop-shadow-lg pb-7 select-none"}
//   //   />
//   // </div>

export const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: {
  children?: any;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_s: any, i: React.Key | null | undefined) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${
                curr === i ? "p-0.5" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// };
