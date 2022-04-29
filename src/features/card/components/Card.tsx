import * as React from "react";
import { memo } from "react";
import { motion, useMotionValue } from "framer-motion";
import { CardData } from "../types";
import Link from "next/link";
import clsx from "clsx";
import { closeSpring } from "./animations";

interface Props extends CardData {
  isSelected: boolean;
}
const Card = memo(function _Card({ id, backgroundColor, category, imageSrc, title }: Props) {
  const zIndex = useMotionValue(0);

  return (
    <motion.div className={clsx("relative aspect-video")} style={{ zIndex }}>
      <motion.div
        layoutId={`card-${id}`}
        className={clsx("h-full pointer-events-none relative")}
        style={{ zIndex }}
      >
        <motion.div
          layoutId={`card-surface-${id}`}
          className={clsx("relative bg-white overflow-hidden h-full rounded-2xl shadow-lg")}
          style={{ zIndex }}
        >
          <motion.div className="overflow-hidden" layoutId={`card-image-container-${id}`}>
            <motion.img
              className="card-image object-cover"
              layoutId={`card-image-${id}`}
              src={imageSrc}
              alt={""}
              initial={false}
              transition={closeSpring}
              style={{ scale: 1.25 }}
            />
          </motion.div>
          <motion.div
            layoutId={`card-header-${id}`}
            className="absolute text-white font-bold left-0 top-0 p-4 max-w-75"
            style={{ zIndex }}
          >
            <p className="text-sm">{category}</p>
            <h3 className="text-3xl">{title}</h3>
          </motion.div>
        </motion.div>
        <Link href={`#${id}`} scroll={false}>
          <a className={clsx("absolute w-full h-full inset-0 pointer-events-auto")}></a>
        </Link>
      </motion.div>
    </motion.div>
  );
});

export default Card;
