import { StoreGetProductsParams } from "@medusajs/medusa"
import { useCollections } from "medusa-react"
import { ChangeEvent } from "react"
import { useCustomNavCollections } from "../../../../lib/hooks/use-nav-collections"
import ListSection from "../list-section"

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
}

const RefinementList = ({
  refinementList,
  setRefinementList,
}: RefinementListProps) => {
  const { collections, isLoading } = useCollections()
  const sectionCollections = useCustomNavCollections()

  const handleCollectionChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target

    const collectionIds = refinementList.collection_id || []
    console.log(refinementList)

    const exists = collectionIds.includes(id)

    if (checked && !exists) {
      setRefinementList({
        ...refinementList,
        collection_id: [...collectionIds, id],
      })
      return
    }

    if (!checked && exists) {
      setRefinementList({
        ...refinementList,
        collection_id: collectionIds.filter((c) => c !== id),
      })
      return
    }
    return
  }

  return (
    <div className="flex flex-col max-w-xs w-full shadow-md h-full ml-2 ">
      <span className="px-4 font-bold border-b-2 border-primary w-full">
        Kolekcje
      </span>
      <div className="flex flex-col p-2">
        {sectionCollections.map((section) => (
          <ListSection
            key={section.metaKey}
            section={section}
            handleCollectionChange={handleCollectionChange}
            refinementList={refinementList}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div>
      <div className="px-8 py-4  small:pr-0 small:pl-8 small:min-w-[250px]">
        <div className="flex gap-x-3 small:flex-col small:gap-y-3">
          <span className="text-base-semi">Kolekcje</span>
          <ul className="text-base-regular flex items-center gap-x-4 small:grid small:grid-cols-1 small:gap-y-2">
            {collections?.map((c) => (
              <li key={c.id}>
                <label className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={refinementList.collection_id?.includes(
                      c.id
                    )}
                    onChange={(e) => handleCollectionChange(e, c.id)}
                    className="accent-amber-200"
                  />
                  {c.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RefinementList
