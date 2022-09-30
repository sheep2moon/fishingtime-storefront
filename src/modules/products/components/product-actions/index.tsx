import { useProductActions } from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import Button from "@modules/common/components/button"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import Link from "next/link"
import React, { useMemo, useEffect } from "react"
import { Product } from "types/medusa"
import { navCollections } from "../../../../lib/data/navCollections"
import ProductBreadcrumbs from "../product-breadcrumbs"

type ProductActionsProps = {
  product: Product
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions()

  const price = useProductPrice({ id: product.id, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  console.log(product.collection)

  return (
    <div className="flex flex-col gap-y-2">
      {product.collection && (
        <ProductBreadcrumbs collection={product.collection} />
      )}
      <h3 className="text-xl-regular">{product.title}</h3>

      {product.variants.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
          {product.options.map((option) => {
            return (
              <div key={option.id}>
                <OptionSelect
                  option={option}
                  current={options[option.id]}
                  updateOption={updateOptions}
                  title={option.title}
                />
              </div>
            )
          })}
        </div>
      )}

      <div className="mb-4">
        {selectedPrice ? (
          <div className="flex flex-col text-gray-700">
            <span
              className={clsx("text-xl-semi", {
                "text-rose-600": selectedPrice.price_type === "sale",
              })}
            >
              {selectedPrice.calculated_price}
            </span>
            {selectedPrice.price_type === "sale" && (
              <>
                <p>
                  <span className="text-gray-500">Wcześniej: </span>
                  <span className="line-through">
                    {selectedPrice.original_price}
                  </span>
                </p>
                <span className="text-rose-600">
                  -{selectedPrice.percentage_diff}%
                </span>
              </>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {product.hs_code && (
        <div className="text-lg">
          <span className="font-semibold mr-1">Producent:</span>
          <span>{product.hs_code}</span>
        </div>
      )}
      <Button onClick={addToCart}>
        {!inStock ? "Brak w magazynie" : "Dodaj do koszyka"}
      </Button>
    </div>
  )
}

export default ProductActions
