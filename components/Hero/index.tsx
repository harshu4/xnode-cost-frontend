import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-[120px] pb-16 text-[#1E1E1E] md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[1px] 2xl:pb-[50px]"
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
                  className="mx-auto mb-32 w-1/2"
                />
                <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
                  Join the ecosystem
                </h1>
                <p className="text-body-black mb-12 text-base font-medium  !leading-relaxed dark:opacity-90 sm:text-lg md:text-4xl">
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
