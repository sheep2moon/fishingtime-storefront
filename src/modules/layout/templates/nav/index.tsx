import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { VscAccount } from "react-icons/vsc"
import CartSidebar from "../../components/cart-sidebar"

const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div
      className={clsx("sticky top-0  inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <header className="relative h-16 small:h-28 mx-auto transition-colors bg-white duration-200 group-hover:bg-white shadow-lg text-base no-scrollbar">
        <nav className="text-gray-900  flex items-center justify-start w-full h-full text-small-regular transition-colors duration-200">
          <div className="flex flex-col w-full h-full">
            <div className="flex h-16 justify-between items-center px-1 2xsmall:px-4 max-w-[1440px] mx-auto w-full">
              {/* HAMBURGER */}
              <div className="block small:hidden">
                <Hamburger setOpen={toggle} />
              </div>
              {/* LOGO */}
              <div className="flex items-center h-full relative">
                <Link href="/">
                  <a className="text-lg small:text-xl-semi w-52 2xsmall:w-60 xsmall:w-72 h-1 mx-[-2rem] small:w-64 flex items-center ">
                    <Image
                      src="/store-logo.svg"
                      layout="fill"
                      alt="logotyp sklepu"
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </div>
              {/* RIGHT SIDE */}
              <div className="flex items-center small:ml-auto gap-x-6 h-full justify-end text-3xl">
                {/* SEARCH */}
                <div className="hidden small:flex items-center gap-x-6 h-full">
                  {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
                  <Link href="/account">
                    <a className="text-base flex items-center gap-1">
                      <VscAccount /> Konto
                    </a>
                  </Link>
                </div>
                {/* CART */}
                {/* <CartDropdown /> */}
                <CartSidebar />
              </div>
            </div>
            <div className="hidden small:block h-12 bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-slate-50 ">
              <div className="max-w-[1440px] h-full mx-auto">
                <DropdownMenu />
              </div>
            </div>
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )

  // return (
  //   <div
  //     className={clsx("sticky top-0 inset-x-0 z-50 group", {
  //       "!fixed": isHome,
  //     })}
  //   >
  //     <header className="relative h-16 px-4 mx-auto transition-colors bg-white border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200 shadow-lg text-base">
  //       <nav className="text-gray-900  flex items-center justify-start w-full h-full text-small-regular transition-colors duration-200">
  //         <div className="block small:hidden pr-4">
  //           <Hamburger setOpen={toggle} />
  //         </div>

  //         <div className="flex items-center h-full">
  //           <Link href="/">
  //             <a className="text-lg small:text-xl-semi">FishingTime</a>
  //           </Link>
  //         </div>

  //         <div className="hidden small:block h-full ml-10">
  //           <DropdownMenu />
  //         </div>

  //         <div className="flex items-center ml-auto gap-x-6 h-full justify-end">
  //           <div className="hidden small:flex items-center gap-x-6 h-full">
  //             {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
  //             <Link href="/account">
  //               <a className="text-base flex items-center gap-1">
  //                 <VscAccount /> Konto
  //               </a>
  //             </Link>
  //           </div>
  //           <CartDropdown />
  //         </div>
  //       </nav>
  //       <MobileMenu />
  //     </header>
  //   </div>
  // )
}

export default Nav
