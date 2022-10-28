import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import ArrowRight from "../../../common/icons/arrow-right"

const Hero = () => {
  return (
    <>
      {/* <div className="h-[90vh] w-full relative ">
        <div classNameName="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:py-32 content-container">
          <h1 classNameName="text-2xl-semi mb-4 drop-shadow-md shadow-black tracking-wider">
            Sklep wędkarski
          </h1>
          <p classNameName="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            tekst dolny
          </p>
          <div classNameName="bg-black/20 rounded-sm">
            <UnderlineLink href="/sklep">Przejdź do sklepu</UnderlineLink>
          </div>
        </div>
        <Image
          src="/hero.jpg"
          layout="fill"
          loading="eager"
          priority={true}
          quality={90}
          objectFit="cover"
          alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
          classNameName="absolute inset-0"
          draggable="false"
        />
      </div> */}
      <section className="mt-16 small:mt-28 overflow-hidden bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat ">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="content-container">
            <div className="max-w-lg text-center sm:text-left ">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                Produkty oferowane na stronie są częścią oferty sklepu
                stacjonarnego.
              </h2>

              <p className=" max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                Sklep internetowy jest w produkcji. Składanie zamówień jest
                obecnie nie możliwe.
              </p>

              <div className="mt-4 sm:mt-8">
                <div className="bg-emerald-900 w-fit text-slate-50 rounded-md mx-auto md:mx-0">
                  <UnderlineLink href="/sklep">Zobacz ofertę</UnderlineLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
