import { useCustomNavCollections } from "../../../../lib/hooks/use-nav-collections"
import ListSection from "../list-section"

const RefinementList = () => {
  const sectionCollections = useCustomNavCollections()

  return (
    <div className="flex flex-col w-full max-w-md small:max-w-xs shadow-md h-full">
      <span className="px-4 font-bold border-b-2 border-primary w-full">
        Kolekcje
      </span>
      <div className="flex flex-col p-2">
        {sectionCollections.map((section) => (
          <ListSection key={section.metaKey} section={section} />
        ))}
      </div>
    </div>
  )
}

export default RefinementList
