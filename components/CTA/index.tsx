const CTA = ({ scrollIntoView }) => {
  const handleClick = () => {
    scrollIntoView.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <section
        id="cta"
        className="relative z-10 overflow-hidden bg-white pt-[120px] pb-16 text-black md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[100px] 2xl:pb-[50px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <p className="text-body-black mb-12 text-sm font-medium  !leading-relaxed dark:opacity-90 sm:text-base md:text-2xl">
                  Join us as we embark in our mission to address the information
                  asymmetry in Web3 data by providing an open and decentralized
                  infrastructure that enables collaboration, transparency, and
                  innovation in the crypto space.
                </p>
                <div className="items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    onClick={handleClick}
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    {' '}
                    Be a contributor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
