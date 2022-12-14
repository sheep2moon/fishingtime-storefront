import { useProductActions } from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import Button from "@modules/common/components/button"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import Link from "next/link"
import React, { useMemo, useEffect } from "react"
import { Product } from "types/medusa"
import { navCollections } from "../../../../lib/data/navCollections"
import InputNumber from "../../../common/components/input-number"
import ProductBreadcrumbs from "../product-breadcrumbs"

type ProductActionsProps = {
  product: Product
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const {
    updateOptions,
    addToCart,
    options,
    inStock,
    variant,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    maxQuantityMet,
  } = useProductActions()

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

      {product.hs_code && (
        <div className="text-lg">
          <span className="font-semibold mr-1">Producent:</span>
          <span>{product.hs_code}</span>
        </div>
      )}

      <div className="mt-4 mb-2">
        {selectedPrice ? (
          <div className="flex flex-col text-gray-700">
            <span
              className={clsx("text-xl-semi", {
                "text-rose-600": selectedPrice.price_type === "sale",
              })}
            >
              <span>Cena:</span>
              {selectedPrice.calculated_price.replace("PLN", "") + "z??"}
            </span>
            {selectedPrice.price_type === "sale" && (
              <>
                <p>
                  <span className="text-gray-500">Wcze??niej: </span>
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
          <div>Produkt niedost??pny</div>
        )}
      </div>

      <div className="flex flex-col my-4">
        <span>Wybierz ilo????</span>
        <div className="flex items-center space-x-3">
          <Button className="w-8" onClick={decreaseQuantity}>
            -
          </Button>
          <InputNumber
            className="w-16 text-lg text-center"
            value={quantity}
            readOnly={true}
          />
          <Button className="w-8" onClick={increaseQuantity}>
            +
          </Button>
        </div>
        {maxQuantityMet && (
          <span className="text-rose-900 font-bold">
            Wi??ksza ilo???? niedost??pna
          </span>
        )}
      </div>

      <Button onClick={addToCart}>
        {!inStock ? "Brak w magazynie" : "Dodaj do koszyka"}
      </Button>
    </div>
  )
}

export default ProductActions
