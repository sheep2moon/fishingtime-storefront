import { medusaClient } from "@lib/config"
import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { Product, ProductCollection, Region } from "@medusajs/medusa"
import { formatAmount, useCart } from "medusa-react"
import { useQuery } from "react-query"
import { ProductPreviewType } from "types/global"
import { CalculatedVariant } from "types/medusa"

type LayoutCollection = {
  id: string
  title: string
}

interface NavCollections {
  [key: string]: Array<{ id: string; title: string }>
}

// const fetchCollectionData = async (): Promise<LayoutCollection[]> => {
const fetchCollectionData = async (): Promise<NavCollections> => {
  let collections: ProductCollection[] = []
  let offset = 0
  let count = 1

  do {
    await medusaClient.collections
      .list({ offset })
      .then(({ collections: newCollections, count: newCount }) => {
        collections = [...collections, ...newCollections]
        count = newCount
        offset = collections.length
      })
      .catch((_) => {
        count = 0
      })
  } while (collections.length < count)
  console.log(collections)

  //Handling custom subcollections
  let newCollections: NavCollections = {}
  newCollections["others"] = []
  collections.forEach((collection) => {
    const navCollection = { id: collection.id, title: collection.title }
    if (
      Object.keys(collection.metadata).length > 0 &&
      typeof collection.metadata.parent === "string"
    ) {
      console.log("tu", typeof newCollections[collection.metadata.parent])

      if (typeof newCollections[collection.metadata.parent] === "undefined") {
        newCollections[collection.metadata.parent] = []
        console.log("jestem")
      }

      newCollections[collection.metadata.parent].push(navCollection)
    } else {
      console.log(typeof newCollections["others"])
      newCollections["others"].push(navCollection)
    }
  })

  console.log(newCollections)
  return newCollections
  // return collections.map((c) => {
  //   const parent_collection =
  //     Object.keys(c.metadata).length > 0 ? c.metadata.parent : false
  //   return {
  //     id: c.id,
  //     title: c.title,
  //     parent_collection,
  //   }
  // })
}

export const useNavigationCollections = () => {
  const queryResults = useQuery("navigation_collections", fetchCollectionData, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })

  return queryResults
}

const fetchFeaturedProducts = async (
  cartId: string,
  region: Region
): Promise<ProductPreviewType[]> => {
  const products = await medusaClient.products
    .list({
      is_giftcard: false,
      limit: 4,
      cart_id: cartId,
    })
    .then(({ products }) => products)
    .catch((_) => [] as Product[])

  return products.map((p) => {
    const variants = p.variants as CalculatedVariant[]

    const cheapestVariant = variants.reduce((acc, curr) => {
      if (acc.calculated_price > curr.calculated_price) {
        return curr
      }
      return acc
    })

    return {
      id: p.id,
      title: p.title,
      handle: p.handle,
      thumbnail: p.thumbnail,
      price: {
        calculated_price: formatAmount({
          amount: cheapestVariant.calculated_price,
          region: region,
          includeTaxes: false,
        }),
        original_price: formatAmount({
          amount: cheapestVariant.original_price,
          region: region,
          includeTaxes: false,
        }),
        difference: getPercentageDiff(
          cheapestVariant.original_price,
          cheapestVariant.calculated_price
        ),
        price_type: cheapestVariant.calculated_price_type,
      },
    }
  })
}

export const useFeaturedProductsQuery = () => {
  const { cart } = useCart()

  const queryResults = useQuery(
    ["layout_featured_products", cart?.id, cart?.region],
    () => fetchFeaturedProducts(cart?.id!, cart?.region!),
    {
      enabled: !!cart?.id && !!cart?.region,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  )

  return queryResults
}
