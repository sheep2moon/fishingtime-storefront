import clsx from "clsx"
import Link from "next/link"
import Thumbnail from "../../../products/components/thumbnail"
import { ProductHit } from "../../../search/components/hit"

type HitProps = {
  hit: ProductHit
}

const ProductHitPreview = ({ hit }: HitProps) => {
  const is_available = hit.variants.some((v) => v.inventory_quantity > 0)
  console.log(hit)

  let price = 0
  if (hit.variants[0].prices) price = hit.variants[0].prices[0].amount
  hit.variants.forEach((variant) => {
    if (variant.prices) {
      variant.prices.forEach((p) => {
        if (p.amount < price) price = p.amount
      })
    }
  })
  price = price / 100

  return (
    <div
      className={clsx(
        "shadow-lg shadow-slate-300 rounded-md w-full max-w-[256px]",
        {
          "opacity-50": !is_available,
        }
      )}
    >
      <Link href={`/products/${hit.handle}`}>
        <a className="block relative  w-full xsmall:w-44 small:w-52">
          <div className="flex flex-col p-1 justify-between h-full">
            <div className="p-1 ">
              <Thumbnail thumbnail={hit.thumbnail} size="full" />
            </div>
            <div className="text-base h-full flex flex-col justify-between text-stone-900">
              <span className="text-sm font-light text-right">
                {hit.hs_code || "\u00A0"}
              </span>
              <span className="border-t border-emerald-900/50 px-1 font-medium text-sm inline-block h-12 leading-6 text-ellipsis overflow-hidden">
                {hit.title}
              </span>
              <div className="flex justify-between items-center px-2">
                {is_available && (
                  <span className="text-xs text-emerald-600">Dostępny</span>
                )}
                {!is_available && (
                  <span className="text-xs text-rose-600">Niedostępny</span>
                )}
                <span className="">{price.toFixed(2)}zł</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ProductHitPreview
