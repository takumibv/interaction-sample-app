import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import * as React from "react";
import Card from "./components/Card";
import CardModal from "./components/CardModal";
import { cardData } from "./data";
import { CardData } from "./types";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

const List = () => {
  const router = useRouter();
  const { asPath } = router;
  const [currentCard, setCurrentCard] = React.useState<CardData | undefined>();

  useIsomorphicLayoutEffect(() => {
    const hash = asPath.split("#")[1] ?? "";
    console.log("useIsomorphicLayoutEffect", router, asPath, hash);
    setCurrentCard(cardData.find((card) => hash === card.id));
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
