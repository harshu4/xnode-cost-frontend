/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

const Hero4 = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white text-[#1E1E1E] md:pt-[10px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[1900px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-2xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
                  Join our ecosystem to build open data infrastructure for web3
                  without a middleman.
                </h1>
                <p className="text-body-black mb-12 px-12 text-sm font-medium !leading-relaxed dark:opacity-90 sm:text-lg  md:mb-3 md:px-28 md:text-4xl xl:mb-12">
                  No matter your role - developer, user, academic, partner - you
                  have a part to play in L3A's mission. Get involved and help
                  shape the future of Web 3.0.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/lines/Line3.svg"
          alt="logo"
          width={100}
          height={20}
          className="mx-auto mt-5 mb-10 w-1 md:mb-1"
        />
        <Image
          src="/images/lines/Line3.svg"
          alt="logo"
          width={100}
          height={20}
          className="mx-auto -mt-7 hidden w-1 xl:block"
        />
      </section>
    </>
  )
}

export default Hero4
