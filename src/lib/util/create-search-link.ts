

export const createCategoryURL = (category: string) => {
    return `products%5Bmenu%5D%5Bcollection.metadata.parent%5D=${category}`
}

export const createSubcategoryURL = (category: string,subcategory: string) => {
    return  createCategoryURL(category)+`&products%5BrefinementList%5D%5Bcollection.title%5D%5B0%5D=${subcategory}`
}