import React, { ReactElement } from "react"
import Head from "../modules/common/components/head"
import Layout from "../modules/layout/templates"
import { NextPageWithLayout } from "../types/global"
import mapSrc from "../../public/contact-map.png"
import Image from "next/image"
import { GiPhone } from "react-icons/gi"
import { SiGooglemaps } from "react-icons/si"
import { IoMdNavigate } from "react-icons/io"

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Kontakt | Fishing Time"
        description="Polityka prywatności sklepu internetowego Fishing Time"
      />
      <div className="content-container my-6 grid small:grid-cols-2 items-center justify-center max-w-xl ">
        <div className="flex flex-col gap-2 w-fit">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-amber-300 " />
            <h1 className="text-xl font-bold">Kontakt</h1>
          </div>
          <div className="font-bold flex items-center gap-2">
            <GiPhone />
            Artur Iwan:
          </div>
          <span className="tracking-wider">726 539 114</span>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-bold">
              <SiGooglemaps />
              Adres:
            </div>
            <span className="">Garbów, ul. Młyńska 6</span>
          </div>
          <a
            href="https://goo.gl/maps/TnvkJ4uRS9GHLXy89"
            className="p-2 bg-primary text-light flex items-center gap-1 rounded-sm"
            target="_blank"
            rel="noreferrer"
          >
            <IoMdNavigate />
            <span>Zobacz na mapie</span>
          </a>
        </div>
        <div className="mt-8 small:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.8672625669239!2d22.33378991412168!3d51.354859189512474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722677a14b1b1df%3A0x9c582368b2715b3a!2zTcWCecWEc2thIDYsIDIxLTA4MCBHYXJiw7N3!5e0!3m2!1spl!2spl!4v1668769987362!5m2!1spl!2spl"
            width="400"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  )
}

ContactPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default ContactPage
