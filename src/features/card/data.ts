import { url } from "../../utils/config";
import { CardData } from "./types";

export const cardData: CardData[] = [
  // Photo by ivan Torres on Unsplash
  {
    id: "c",
    category: "Pizza",
    title: "5 Food Apps Delivering the Best of Your City",
    pointOfInterest: 80,
    backgroundColor: "#814A0E",
    imageSrc: url("/images/cat.jpg"),
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "f",
    category: "How to",
    title: "Arrange Your Apple Devices for the Gram",
    pointOfInterest: 200,
    backgroundColor: "#959684",
    imageSrc: url("/images/cat2.jpg"),
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    category: "Pedal Power",
    title: "Map Apps for the Superior Mode of Transport",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2",
    imageSrc: url("/images/cat3.jpg"),
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "g",
    category: "Holidays",
    title: "Our Pick of Apps to Help You Escape From Apps",
    pointOfInterest: 200,
    backgroundColor: "#8F986D",
    imageSrc: url("/images/cat4.jpg"),
  },
];
