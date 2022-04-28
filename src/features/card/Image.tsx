import * as React from "react";
import { motion } from "framer-motion";
import { closeSpring } from "./animations";

interface Props {
  id: string;
  alt: string;
  src: string;
  isSelected: boolean;
  pointOfInterest: number;
  backgroundColor: string;
}

export const Image: React.FC<Props> = ({
  id,
  alt,
  src,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
}) => {
  // const inverted = useDeprecatedInvertedScale();

  return (
    <motion.div
      className="card-image-container h-80 w-screen overflow-hidden"
      layout
      style={{
        // ...inverted,
        backgroundColor,
        originX: 0,
        originY: 0,
      }}
    >
      <motion.img
        className="card-image"
        layout
        src={src}
        alt={alt}
        initial={false}
        animate={isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }}
        transition={closeSpring}
      />
    </motion.div>
  );
};
