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
import { useNavigationCollections } from "./use-layout-data"

// let customCollections: {
//   metaKey: string
//   title: string
//   collections: { id: string; title: string }[]
// }[] = [
//   { metaKey: "wedki", title: "Wędki", collections: [] },
//   { metaKey: "kolowrotki", title: "Kołowrotki", collections: [] },
//   { metaKey: "", title: "Pozostałe", collections: [] },

export type customCollections = {
  metaKey: string
  title: string
  icon: JSX.Element
  collections: { id: string; title: string }[]
}

export const useCustomNavCollections = (): customCollections[] => {
  let customCollections: customCollections[] = [
    {
      metaKey: "wedki",
      icon: <GiFishingPole />,
      title: "Wędki",
      collections: [],
    },
    {
      metaKey: "kolowrotki",
      icon: <FcFilmReel />,
      title: "Kołowrotki",
      collections: [],
    },
    {
      metaKey: "akcesoria-wedkarskie",
      icon: <GiBugNet />,
      title: "Akcesoria wędkarskie",
      collections: [],
    },
    {
      metaKey: "torby-pojemniki",
      icon: <BsInboxes />,
      title: "Torby i pojemniki",
      collections: [],
    },
    {
      metaKey: "zanety-ziarna",
      icon: <GiGrain />,
      title: "Zanęty i ziarna",
      collections: [],
    },
    {
      metaKey: "kulki-pellety",
      icon: <TbCircles />,
      title: "Kulki proteinowe i pellety",
      collections: [],
    },
    {
      metaKey: "atraktory",
      icon: <GiBottledShadow />,
      title: "Atraktory i dodatki",
      collections: [],
    },
    {
      metaKey: "przynety-spinningowe",
      icon: <GiFishingLure />,
      title: "Przynęty spinningowe",
      collections: [],
    },
    {
      metaKey: "elektronika",
      icon: <GiElectric />,
      title: "Sprzęt elektroniczny",
      collections: [],
    },
    {
      metaKey: "krzesla-lozka",
      icon: <GiBarStool />,
      title: "Krzesła i łóżka",
      collections: [],
    },
    {
      metaKey: "parasole-namioty",
      icon: <GiCampingTent />,
      title: "Parasole I Namioty",
      collections: [],
    },
    {
      metaKey: "odziez-obuwie",
      icon: <GiClothes />,
      title: "Odzież i obuwie",
      collections: [],
    },
    {
      metaKey: "turystyka",
      icon: <GiBackpack />,
      title: "Turystyka",
      collections: [],
    },
    {
      metaKey: "pozostale",
      icon: <GiFishingNet />,
      title: "Pozostałe",
      collections: [],
    },
  ]
  const { data, isLoading } = useNavigationCollections()
  if (data) {
    data.forEach((c) => {
      if (c.parent_collection) {
        const idx = customCollections.findIndex(
          (i) => i.metaKey === c.parent_collection
        )
        customCollections[idx].collections.push(c)
      } else {
        customCollections[customCollections.length - 1].collections.push(c)
      }
    })
  }

  return customCollections
}
