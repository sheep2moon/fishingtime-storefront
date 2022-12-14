import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import { useRef, useState } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="flex items-start relative w-full max-w-3xl mx-auto">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4 ">
        <div className="relative aspect-square w-full  my-1 shadow-md">
          <Image
            src={images[currentImage].url}
            layout="fill"
            objectFit="contain"
            className="absolute inset-0"
            alt={`podgląd produktu ${currentImage + 1}`}
          />
        </div>
        <div className=" flex gap-x-2 flex-wrap px-2 ">
          {images.map((image, index) => {
            return (
              <button
                key={image.id}
                className="h-20 small:h-28 aspect-square relative border  border-black/10 rounded-sm"
                onClick={() => {
                  setCurrentImage(index)
                }}
              >
                <span className="sr-only">Idź do zdjęcia {index + 1}</span>
                <Image
                  src={image.url}
                  layout="fill"
                  objectFit="contain"
                  className="absolute inset-0 "
                  alt="Thumbnail"
                />
              </button>
            )
          })}
        </div>
      </div>
      {/* <div className="flex flex-col flex-1 small:mx-16 gap-y-4 ">
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
      </div> */}
    </div>
  )
}

export default ImageGallery
