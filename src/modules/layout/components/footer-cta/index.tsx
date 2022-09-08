import UnderlineLink from "@modules/common/components/underline-link"

const FooterCTA = () => {
  return (
    <div className="bg-amber-100 w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">Zobacz najnowsze czapki</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">Przejdź do czapek</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
          img
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
