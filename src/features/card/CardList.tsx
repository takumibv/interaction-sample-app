import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import * as React from "react";
import Card from "./Card";
import CardModal from "./CardModal";
import { CardData } from "./types";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

const List = () => {
  const router = useRouter();
  const { asPath } = router;
  const [currentCard, setCurrentCard] = React.useState<CardData | undefined>();

  useIsomorphicLayoutEffect(() => {
    setCurrentCard(cardData.find((card) => asPath === `/#${card.id}`));
  }, [asPath]);

  return (
    <>
      <ul className="grid gap-4 grid-cols-1 tablet:grid-cols-2">
        {cardData.map((card) => (
          <li key={card.id}>
            <Card isSelected={card.id === currentCard?.id} {...card} />
          </li>
        ))}
      </ul>
      <AnimatePresence>
        <CardModal isOpen={!!currentCard} card={currentCard} />
      </AnimatePresence>
    </>
  );
};

export default List;

const cardData: CardData[] = [
  // Photo by ivan Torres on Unsplash
  {
    id: "c",
    category: "Pizza",
    title: "5 Food Apps Delivering the Best of Your City",
    pointOfInterest: 80,
    backgroundColor: "#814A0E",
    imageSrc: "/images/cat.jpg",
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "f",
    category: "How to",
    title: "Arrange Your Apple Devices for the Gram",
    pointOfInterest: 200,
    backgroundColor: "#959684",
    imageSrc: "/images/cat2.jpg",
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    category: "Pedal Power",
    title: "Map Apps for the Superior Mode of Transport",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2",
    imageSrc: "/images/cat3.jpg",
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "g",
    category: "Holidays",
    title: "Our Pick of Apps to Help You Escape From Apps",
    pointOfInterest: 200,
    backgroundColor: "#8F986D",
    imageSrc: "/images/cat4.jpg",
  },
];
