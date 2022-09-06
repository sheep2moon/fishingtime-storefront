import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="flex justify-between flex-col small:flex-row items-center text-center mb-16">
          <p className="text-2xl-regular text-gray-900 max-w-lg">
            Najnowsze produkty w sklepie.
          </p>
          <UnderlineLink href="/store">Przejdź do sklepu</UnderlineLink>
        </div>
        <ul className="flex gap-4 flex-wrap justify-center small:justify-start">
          {data
            ? data.map((product) => (
                <li key={product.id} className="w-52">
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
