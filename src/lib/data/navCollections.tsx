import {
  GiFishingNet,
  GiFishingPole,
  GiClothes,
  GiElectric,
  GiCampingTent,
  GiFishingLure,
  GiBackpack,
  GiBugNet,
  GiGrain,
  GiBottledShadow,
  GiBarStool,
} from "react-icons/gi"
import { BsInboxes } from "react-icons/bs"
import { FcFilmReel } from "react-icons/fc"
import { TbCircles } from "react-icons/tb"

export type customCollection = {
  title: string
  icon: JSX.Element
  collections: { id: string; title: string; handle: string }[]
}

export const navCollections: { [key: string]: customCollection } = {
  wedki: {
    title: "Wędki",
    icon: <GiFishingPole />,
    collections: [],
  },
  kolowrotki: {
    icon: <FcFilmReel />,
    title: "Kołowrotki",
    collections: [],
  },
  "akcesoria-wedkarskie": {
    icon: <GiBugNet />,
    title: "Akcesoria wędkarskie",
    collections: [],
  },
  "torby-pojemniki": {
    icon: <BsInboxes />,
    title: "Torby i pojemniki",
    collections: [],
  },
  "zanety-ziarna": {
    icon: <GiGrain />,
    title: "Zanęty i ziarna",
    collections: [],
  },
  "kulki-pellety": {
    icon: <TbCircles />,
    title: "Kulki proteinowe i pellety",
    collections: [],
  },
  atraktory: {
    icon: <GiBottledShadow />,
    title: "Atraktory i dodatki",
    collections: [],
  },
  "przynety-spinningowe": {
    icon: <GiFishingLure />,
    title: "Przynęty spinningowe",
    collections: [],
  },
  elektronika: {
    icon: <GiElectric />,
    title: "Sprzęt elektroniczny",
    collections: [],
  },
  "krzesla-lozka": {
    icon: <GiBarStool />,
    title: "Krzesła i łóżka",
    collections: [],
  },
  "parasole-namioty": {
    icon: <GiCampingTent />,
    title: "Parasole I Namioty",
    collections: [],
  },
  "odziez-obuwie": {
    icon: <GiClothes />,
    title: "Odzież i obuwie",
    collections: [],
  },
  turystyka: {
    icon: <GiBackpack />,
    title: "Turystyka",
    collections: [],
  },
  pozostale: {
    icon: <GiFishingNet />,
    title: "Pozostałe",
    collections: [],
  },
}
