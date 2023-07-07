import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-[10px] text-[#1E1E1E] lg:pt-[100px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/hero/data-people.svg"
                  alt="logo"
                  width={100}
                  height={20}
                  className="mx-auto h-[402px] w-[747px] scale-110 transition-all duration-200 hover:z-20 md:mt-1 lg:mt-20"
                />
                {/* <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
                  Join the ecosystem
                </h1>
                <p className="text-body-black mb-12 text-base font-medium !leading-relaxed dark:opacity-90  sm:text-lg md:mb-3 md:text-4xl xl:mb-12">
                  Help build the decentralized data infrastructure and standards
                  across Web3
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
