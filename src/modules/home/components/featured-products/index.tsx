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
            Wyróżnione produkty.
          </p>
          <UnderlineLink href="/sklep">Przejdź do sklepu</UnderlineLink>
        </div>
        <ul className="grid grid-cols-2 gap-1 xsmall:grid-cols-3 small:grid-cols-6 justify-center small:justify-start">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(6).keys()).map((i) => (
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
