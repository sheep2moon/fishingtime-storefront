import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { useEffect, useState } from "react"
import Confetti from "react-confetti"
import { FaBirthdayCake } from "react-icons/fa"

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

const Hero = () => {
  const { width, height } = useWindowSize()

  return (
    <>
      <div className="absolute inset-0">
        <Confetti gravity={0.05} width={width} height={height} />
      </div>
      <div className="h-[90vh] w-full relative ">
        {/* STO LAT */}
        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
          <FaBirthdayCake className="text-8xl" />
          <h1 className="text-8xl text-center text-black ">Sto lat</h1>
        </div>
        <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
          {/* <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
            Sklep wędkarski
          </h1>
          <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            tekst dolny
          </p>
          <UnderlineLink href="/sklep?kategoria=all">
            Przejdź do sklepu
          </UnderlineLink> */}
        </div>
        <Image
          src="/hero.jpg"
          layout="fill"
          loading="eager"
          priority={true}
          quality={90}
          objectFit="cover"
          alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
          className="absolute inset-0 opacity-20"
          draggable="false"
        />
      </div>
    </>
  )
}

export default Hero
