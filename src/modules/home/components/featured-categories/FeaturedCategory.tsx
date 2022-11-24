import Image from "next/image"
import Link from "next/link"
import React from "react"

type FeaturedCategoryProps = {
  href: string
  title: string
  imgSrc: any
}

const FeaturedCategory = ({ href, title, imgSrc }: FeaturedCategoryProps) => {
  return (
    <Link href={href}>
      <a className="group relative flex h-96 w-full items-end bg-black">
        <Image
          alt="produkt z danej kategorii"
          src={imgSrc}
          className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
        />

        <div className="relative w-full bg-red-700 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3">
          <h3 className="text-lg uppercase">{title}</h3>

          {/* <p className="mt-1 text-xs font-medium uppercase">Design your own</p> */}
        </div>
      </a>
    </Link>
  )
}

export default FeaturedCategory
