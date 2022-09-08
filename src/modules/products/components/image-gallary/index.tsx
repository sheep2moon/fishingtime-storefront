import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import { useRef } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  return (
    <div className="flex items-start relative">
      <div className="hidden small:flex flex-col gap-y-4 sticky top-28">
        {images.map((image, index) => {
          return (
            <button
              key={image.id}
              className="h-14 small:h-28 w-12 small:w-24 relative border  border-black/10 rounded-sm"
              onClick={() => {
                handleScrollTo(image.id)
              }}
            >
              <span className="sr-only">Idź do zdjęcia {index + 1}</span>
              <Image
                src={image.url}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 "
                alt="Thumbnail"
              />
            </button>
          )
        })}
      </div>
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4 ">
        {images.map((image, index) => {
          return (
            <div
              ref={(image) => imageRefs.current.push(image)}
              key={image.id}
              className="relative aspect-[29/34] w-full my-1 shadow-md"
              id={image.id}
            >
              <Image
                src={image.url}
                layout="fill"
                objectFit="cover"
                priority={index <= 2 ? true : false}
                className="absolute inset-0"
                alt={`Product image ${index + 1}`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
