import { GiFishingNet, GiFishingPole } from "react-icons/gi"
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
      icon: <GiFishingNet />,
      title: "Kołowrotki",
      collections: [],
    },
    {
      metaKey: "",
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
