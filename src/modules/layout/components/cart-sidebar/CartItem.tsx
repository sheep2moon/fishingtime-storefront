import { LineItem, Region } from "@medusajs/medusa"
import Link from "next/link"
import React from "react"
import { useStore } from "../../../../lib/context/store-context"
import { CalculatedVariant } from "../../../../types/medusa"
import LineItemOptions from "../../../common/components/line-item-options"
import LineItemPrice from "../../../common/components/line-item-price"
import Trash from "../../../common/icons/trash"
import Thumbnail from "../../../products/components/thumbnail"

type CartItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
}

const CartItem = ({ item, region }: CartItemProps) => {
  const { deleteItem } = useStore()
  return (
    <div className="grid grid-cols-[122px_1fr] gap-x-4" key={item.id}>
      <div className="w-[122px]">
        <Thumbnail thumbnail={item.thumbnail} size="full" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4 w-[130px]">
                <Link href={`/products/${item.variant.product.handle}`}>
                  <a>{item.title}</a>
                </Link>
              </h3>
              <LineItemOptions variant={item.variant} />
              <span>Ilość: {item.quantity}</span>
            </div>
            <div className="flex justify-end">
              <LineItemPrice
                region={region}
                variant={item.variant as CalculatedVariant}
                quantity={item.quantity}
                style="tight"
              />
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between text-small-regular flex-1">
          <div>
            <button
              className="flex items-center gap-x-1 text-gray-500"
              onClick={() => deleteItem(item.id)}
            >
              <Trash size={14} />
              <span>Usuń</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
