import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <div className="shadow-lg shadow-slate-300 h-80 rounded-sm">
      <Link href={`/products/${handle}`}>
        <a className="block h-80">
          <div className="h-80 flex flex-col justify-between">
            <div className="h-60 p-1 ">
              <Thumbnail thumbnail={thumbnail} size="full" />
            </div>
            <div className="text-base-regularh h-full py-2 flex flex-col justify-between text-stone-900">
              <span className="bg-emerald-900 px-1 text-slate-50 text-sm whitespace-nowrap ">
                {title}
              </span>
              <div className="flex items-center px-1">
                {price ? (
                  <>
                    {price.price_type === "sale" && (
                      <span className="line-through text-gray-500">
                        {price.original_price}
                      </span>
                    )}
                    <span
                      className={clsx("font-semibold", {
                        "text-rose-500": price.price_type === "sale",
                      })}
                    >
                      {price.calculated_price}
                    </span>
                  </>
                ) : (
                  <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
                )}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ProductPreview
