import clsx from "clsx"
import Link from "next/link"
import Thumbnail from "../../../products/components/thumbnail"
import { ProductHit } from "../../../search/components/hit"

type HitProps = {
  hit: ProductHit
}

const ProductHitPreview = ({ hit }: HitProps) => {
  const is_available = hit.variants.some((v) => v.inventory_quantity > 0)

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
            <div className="text-base h-full py-2 flex flex-col justify-between text-stone-900">
              <span className="border-t border-emerald-900 px-1 font-semibold text-sm inline-block h-12 leading-6 text-ellipsis overflow-hidden">
                {hit.title}
              </span>
              <span className="text-right block px-2">
                {price.toFixed(2)}zł
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ProductHitPreview
