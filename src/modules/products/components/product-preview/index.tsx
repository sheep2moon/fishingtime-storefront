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
  console.log()

  return (
    <div className="shadow-lg shadow-slate-300 rounded-md p-1">
      <Link href={`/products/${handle}`}>
        <a className="block h-72 w-52 2xsmall:h-64 2xsmall:w-40 small:w-52 small:h-72">
          <div className=" flex flex-col justify-between h-full">
            <div className=" p-1 ">
              <Thumbnail thumbnail={thumbnail} size="full" />
            </div>
            <div className="text-base-regularh h-full py-2 flex flex-col justify-between text-stone-900">
              <span className="border-t border-emerald-900 px-1 font-semibold text-sm inline-block h-12 leading-6 text-ellipsis overflow-hidden">
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
                      className={clsx(
                        "font-semibold text-amber-900 shadow-sm text-right w-full",
                        {
                          "text-rose-500": price.price_type === "sale",
                        }
                      )}
                    >
                      {price?.original_price.replace("PLN", "") + "zł"}
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
