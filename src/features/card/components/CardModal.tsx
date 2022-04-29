import * as React from "react";
import { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { CardData } from "../types";
import Link from "next/link";
import clsx from "clsx";
import { closeSpring } from "./animations";
import { useRouter } from "next/router";

interface Props {
  isOpen: boolean;
  card?: CardData;
}

const CardModal = memo(function CardModal({
  isOpen,
  card = {
    id: "",
    category: "",
    title: "",
    pointOfInterest: 0,
    backgroundColor: "",
    imageSrc: "",
  },
}: Props) {
  const { id, category, imageSrc, title } = card;

  const router = useRouter();

  const zIndex = useMotionValue(20);

  return (
    <Dialog
      as={motion.div}
      open={isOpen}
      onClose={() => router.push("/")}
      className={clsx("fixed inset-0 overflow-auto")}
    >
      <Overlay isSelected={isOpen} />
      <motion.div
        layoutId={`card-${id}`}
        style={{ zIndex }}
        className="sp:py-10 min-h-screen sp:min-h-auto"
      >
        <motion.div
          layoutId={`card-surface-${id}`}
          className={clsx(
            "bg-white mx-auto pointer-events-auto overflow-hidden w-full max-w-150 relative h-full sp:h-auto rounded-none sp:rounded-2xl"
          )}
          style={{ zIndex }}
        >
          <motion.div
            className="aspect-video overflow-hidden"
            layoutId={`card-image-container-${id}`}
          >
            <motion.img
              className="card-image object-cover"
              layoutId={`card-image-${id}`}
              src={imageSrc}
              alt=""
              initial={false}
              transition={closeSpring}
            />
          </motion.div>
          <motion.div
            layoutId={`card-header-${id}`}
            className="absolute text-white font-bold left-0 top-0 p-4 max-w-75"
            style={{ zIndex }}
          >
            <p className="mb-4">
              <Link href="/" scroll={false}>
                <a>{`<`} back</a>
              </Link>
            </p>
            <p className="text-sm">{category}</p>
            <h3 className="text-3xl">{title}</h3>
          </motion.div>
          <motion.div animate className={clsx("p-4 overflow-auto")}>
            <p>
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Dialog>
  );
});

const Overlay = memo(function _Overray({ isSelected }: { isSelected: boolean }) {
  return (
    <Dialog.Overlay
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Link href="/" scroll={false}>
        <a className={clsx("fixed inset-0 bg-black opacity-70")}></a>
      </Link>
    </Dialog.Overlay>
  );
});

export default CardModal;
