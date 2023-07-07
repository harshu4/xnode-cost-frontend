import Image from 'next/image'

const Hero3 = () => {
  return (
    <section className="lg:mt-4mx-auto relative z-10 mt-8 bg-white pb-0 text-[#1E1E1E]">
      <div
        className="wow fadeInUp mx-auto flex flex-col items-center justify-center rounded-md text-center"
        data-wow-delay=".1s"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#000000] lg:h-20 lg:w-20">
          <span className="text-[2rem] font-bold text-white lg:text-[2.5rem]">
            3
          </span>
        </div>
        <p className="mx-auto mb-12 mt-4 w-[323px] text-xl font-bold leading-tight tracking-tight md:mb-2 lg:w-[800px] 2xl:text-[1.85rem]">
          <span className="text-[#6B6B6B]">
            Information asymmetry, a result of this control, has given rise to
            social inequality, scandals, polarization, and corruption. In
            extreme cases, it has even triggered wars. With such a
          </span>{' '}
          massive concentration of data and information, surveillance capitalism
          has begun to influence politics and culture profoundly
        </p>
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
          className="mx-auto -mt-7 mb-0 hidden w-1 md:mb-1 xl:block"
        />
      </div>
    </section>
  )
}

export default Hero3
