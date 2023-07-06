import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-[10px] pb-5 text-[#1E1E1E] md:pt-[10px] md:pb-20"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/logo/l3a-logo.svg"
                  alt="logo"
                  width={100}
                  height={20}
                  className="mx-auto mb-10 w-1/2 transition-all duration-200 hover:z-20 hover:scale-110 md:mb-20"
                />
                <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
                  Join the ecosystem
                </h1>
                <p className="text-body-black mb-12 xl:mb-12 md:mb-3 text-base font-medium  !leading-relaxed dark:opacity-90 sm:text-lg md:text-4xl">
                  Help build the decentralized data infrastructure and standards
                  across Web3
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
