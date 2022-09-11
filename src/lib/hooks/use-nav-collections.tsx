import {
  GiFishingNet,
  GiFishingPole,
  GiClothes,
  GiElectric,
  GiCampingTent,
  GiFishingLure,
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
      metaKey: "namioty",
      icon: <GiCampingTent />,
      title: "Parasole I Namioty",
      collections: [],
    },
    {
      metaKey: "elektronika",
      icon: <GiElectric />,
      title: "Sprzęt elektroniczny",
      collections: [],
    },
    {
      metaKey: "kulki",
      icon: <TbCircles />,
      title: "Kulki i pellety",
      collections: [],
    },
    {
      metaKey: "przynety",
      icon: <GiFishingLure />,
      title: "Przynęty",
      collections: [],
    },
    {
      metaKey: "pojemniki",
      icon: <BsInboxes />,
      title: "Torby, pokrowce, pojemniki",
      collections: [],
    },
    {
      metaKey: "ubrania",
      icon: <GiClothes />,
      title: "Odzież i obuwie",
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
