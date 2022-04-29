import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { memo, ReactNode } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeroItem } from ".";
import { motion } from "framer-motion";

export const Hero = memo(function _Hero() {
  const [currentItem, setCurrentItem] = React.useState(0);
  const onChange = (index: number, item: ReactNode) => {
    console.log(index, item);
    currentItem !== index && setCurrentItem(index);
  };
  const data = [
    {
      id: 0,
      imageSrc: "/images/hero1.png",
      color: "#3C3D3F",
      backgroundColor: "#E6E7E9",
    },
    {
      id: 1,
      imageSrc: "/images/hero2.png",
      color: "#754D2E",
      backgroundColor: "#EAD2C9",
    },
    {
      id: 2,
      imageSrc: "/images/hero3.png",
      color: "#1E1F1D",
      backgroundColor: "#DDDEE0",
    },
    {
      id: 3,
      imageSrc: "/images/hero4.png",
      color: "#fff",
      backgroundColor: "#040100",
    },
  ];
  return (
    <div className="flex">
      <div className="hidden tablet:flex flex-col px-8 justify-center">
        {data.map((data, i) => (
          <a
            href="#"
            className={clsx(
              "my-2 h-3 w-3 cursor-pointer bg-slate-100",
              currentItem === i && " bg-slate-400"
            )}
            key={data.id}
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              setCurrentItem(i);
            }}
          ></a>
        ))}
      </div>
      <Carousel
        className="flex-1 overflow-hidden"
        autoPlay
        interval={5000}
        infiniteLoop
        selectedItem={currentItem}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        onChange={onChange}
      >
        {data.map(({ id, imageSrc, color, backgroundColor }, i) => (
          <HeroItem
            isSelected={currentItem === i}
            key={id}
            id={id}
            src={imageSrc}
            color={color}
            backgroundColor={backgroundColor}
          />
        ))}
      </Carousel>
    </div>
  );
});
