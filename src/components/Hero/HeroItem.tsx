import React, { FC } from "react";
import clsx from "clsx";
import Link from "next/link";
import { memo, ReactNode } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isSelected: boolean;
  id: number;
  src: string;
  color: string;
  backgroundColor: string;
};

export const HeroItem: FC<Props> = memo(function _HeroItem({
  isSelected,
  id,
  src,
  color,
  backgroundColor,
}) {
  return (
    <div
      className="relative text-left w-full"
      style={{ height: "calc(100vh - 4rem)", background: backgroundColor }}
    >
      <AnimatePresence>
        {isSelected && (
          <motion.div
            key={`title-${id}`}
            className="relative inline-block text-left text-7xl sp:text-9xl font-bold leading-tight"
            style={{ left: "10%", top: "10%", color }}
          >
            <motion.p
              key={`title-text-${id}-1`}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
            >
              How
            </motion.p>
            <motion.p
              key={`title-text-${id}-2`}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.35 }}
            >
              are you
            </motion.p>
            <motion.p
              key={`title-text-${id}-3`}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
            >
              feeling?
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSelected && (
          <motion.img
            key={`image-${id}`}
            className="absolute right-0 bottom-0 sp:!w-1/3"
            // style={{ width: "35%" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src={src}
            alt=""
          />
        )}
      </AnimatePresence>
    </div>
  );
});
