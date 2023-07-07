/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

const Hero4 = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 mx-auto w-full max-w-[393px] overflow-hidden bg-white px-4 text-[#000000] lg:max-w-[1000px] 2xl:px-0"
      >
        <div className="flex w-full flex-wrap">
          <div className="w-full">
            <div
              className="wow fadeInUp mx-auto w-full text-center"
              data-wow-delay=".2s"
            >
              <div className="flex w-full flex-col text-center">
                <h1 className="font-regular text-2xl leading-none tracking-tight lg:text-[2rem] 2xl:text-[3.75rem]">
                  Join our ecosystem to build
                </h1>
                <h1 className="text-2xl font-bold leading-none tracking-tighter lg:text-[2rem] 2xl:text-[3.75rem] ">
                  open data infrastructure for web3 without a middleman.
                </h1>
              </div>
              <p className="text-body-black mb-12 mt-8 text-sm font-medium leading-snug tracking-tight text-[#000000] dark:opacity-90 lg:text-2xl 2xl:text-[2rem]">
                No matter your role - developer, user, academic, partner - you
                have a part to play in L3A's mission. Get involved and help
                shape the future of Web 3.0.
              </p>
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
