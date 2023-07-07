import Image from 'next/image'

const Hero2 = () => {
  return (
    <section className="relative z-10  pt-6 pb-1 md:pb-1 xl:px-10">
      <div className="px-2 md:px-1">
        <div className="grid grid-cols-1 bg-white md:grid-cols-3">
          <div className="flex w-full items-center justify-center text-center text-[#1E1E1E]">
            <div
              className="wow fadeInUp mx-auto rounded-md p-8 md:px-2 xl:px-8"
              data-wow-delay=".1s"
            >
              <Image
                src="/images/numbers/1.svg"
                alt="logo"
                width={100}
                height={20}
                className="mx-auto mb-2 w-1/6 transition-all duration-200 hover:z-20 hover:scale-110"
              />
              <p className="mx-auto mb-2 text-xl font-bold  leading-relaxed md:text-[40px]">
                Today Data & internet infrastructures are centralized.
              </p>
              <p className="mx-auto text-xs font-light  leading-relaxed  md:text-[18px]">
                Large data players such as Amazon, Google, Facebook, and
                Microsoft control over 85% of Internet data and infrastructure,
                effectively becoming data monopolies. They control more than 100
                zettabytes of data, a number that continues to grow
                exponentially.
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center text-center text-[#1E1E1E] ">
            <div
              className="wow fadeInUp mx-auto mt-32 flex w-full rounded-md p-8 md:px-2 xl:px-1"
              data-wow-delay=".1s"
            >
              <Image
                src="/images/lines/ForkLines.svg"
                alt="logo"
                width={100}
                height={20}
                className="mx-auto mt-20 mb-10 hidden h-[309px] w-[190.44px] md:mb-20 md:block"
              />
              {/* <Image
                src="/images/lines/Line3.svg"
                alt="logo"
                width={100}
                height={20}
                className="mx-auto -mt-32 mb-10 w-1 transition-all duration-200 hover:z-20 hover:scale-110 md:mb-1 md:hidden"
              /> */}
            </div>
          </div>
          <div className="flex w-full items-center justify-center px-10 text-center text-[#1E1E1E] md:px-0">
            <div
              className="wow fadeInUp mx-auto rounded-md pt-2 md:pt-14"
              data-wow-delay=".1s"
            >
              <Image
                src="/images/numbers/2.svg"
                alt="logo"
                width={100}
                height={20}
                className="mx-auto mb-2 w-1/6 transition-all duration-200 hover:z-20 hover:scale-110"
              />
              <p className="mx-auto mb-2 text-xl font-bold  leading-relaxed md:text-[40px]">
                Without reliable, affordable data and infrastructures, the web3
                industry cannot scale.
              </p>
              <p className="mx-auto text-xs font-light  leading-relaxed  md:text-[18px]">
                The scalability and staggering growth of major internet
                industries such as social media, e-commerce, and sharing
                economies like Uber can be attributed to affordable IT data
                infrastructure and effective use of big data for business
                optimization, operation enhancement, and product design
                improvement. These industries have adeptly harnessed big data to
                craft personalized products and services, institute data-driven
                business decisions{' '}
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/images/lines/Line3.svg"
          alt="logo"
          width={100}
          height={20}
          className="mx-auto mb-10 w-1 transition-all duration-200 hover:z-20 hover:scale-110 md:-mt-32 md:mb-1"
        />
      </div>
    </section>
  )
}

export default Hero2
