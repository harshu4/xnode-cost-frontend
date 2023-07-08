import Image from 'next/image'

const Hero2 = () => {
  return (
    <section className="relative inset-x-0 z-10 mx-auto mt-16 w-full max-w-[400px] px-8 lg:mt-32 lg:max-w-[1340px] lg:px-0">
      <div className="flex w-full flex-col items-start justify-between gap-12 bg-white lg:flex-row lg:gap-0">
        <div className="flex w-full items-center justify-center text-center text-[#000000]">
          <div
            className="wow fadeInUp mx-auto flex flex-col items-center rounded-md"
            data-wow-delay=".1s"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#000000] lg:h-20 lg:w-20">
              <span className="text-[2rem] font-bold text-white lg:text-[2.5rem]">
                1
              </span>
            </div>

            <h1 className="mx-auto mt-2 w-[423px] text-xl font-bold leading-none tracking-tight lg:text-4xl 2xl:w-[538px] 2xl:text-[2.5rem]">
              Today Data & internet infrastructures are centralized.
            </h1>
            <p className="mx-auto mt-2 w-[423px] text-xs font-light !leading-tight tracking-tight lg:mt-4 lg:text-[10px] xl:text-lg 2xl:w-[502px]">
              Large data players such as Amazon, Google, Facebook, and Microsoft
              control over 85% of Internet data and infrastructure, effectively
              becoming data monopolies. They control more than 100 zettabytes of
              data, a number that continues to grow exponentially.
            </p>
          </div>
        </div>
        <Image
          src="/images/lines/ForkLines.svg"
          alt="logo"
          width={100}
          height={20}
          className="wow fadeInUp mx-auto mt-32  hidden h-[409px] lg:block lg:w-[190.44px] xl:w-[250.44px]"
          data-wow-delay=".1s"
        />
        <div className="flex w-full items-center justify-center text-center text-[#000000]">
          <div
            className="wow fadeInUp mx-auto flex flex-col items-center rounded-md"
            data-wow-delay=".1s"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#000000] lg:h-20 lg:w-20">
              <span className="text-[2rem] font-bold text-white lg:text-[2.5rem]">
                2
              </span>
            </div>

            <h1 className="mx-auto mt-2 w-[523px] text-xl font-bold leading-none tracking-tight lg:text-4xl 2xl:w-[538px] 2xl:text-[2.5rem]">
              Without reliable, affordable data and infrastructures, the web3
              industry cannot scale.
            </h1>
            <p className="mx-auto mt-2 w-[463px] text-xs font-light !leading-tight tracking-tight lg:mt-4 lg:text-lg 2xl:w-[502px] 2xl:text-lg">
              The scalability and staggering growth of major internet industries
              such as social media, e-commerce, and sharing economies like Uber
              can be attributed to affordable IT data infrastructure and
              effective use of big data for business optimization, operation
              enhancement, and product design improvement. These industries have
              adeptly harnessed big data to craft personalized products and
              services, institute data-driven business decisions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero2
