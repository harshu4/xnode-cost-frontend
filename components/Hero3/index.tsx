import Image from 'next/image'

const Hero3 = () => {
  return (
    <section className="relative z-10 bg-white pb-0 text-[#1E1E1E] md:px-44 md:pb-1 xl:px-96">
      <div
        className="wow fadeInUp mx-auto items-center justify-center rounded-md p-8 text-center md:px-2 xl:px-8"
        data-wow-delay=".1s"
      >
        <Image
          src="/images/numbers/3.svg"
          alt="logo"
          width={100}
          height={20}
          className="mx-auto mb-2 w-1/5 transition-all duration-200 hover:z-20 hover:scale-110 md:w-1/12"
        />
        <p className="mx-auto mb-12 text-xl font-bold leading-relaxed  md:mb-2 md:text-xl xl:text-4xl">
          <span className="text-[#6B6B6B]">
            Information asymmetry, a result of this control, has given rise to
            social inequality, scandals, polarization, and corruption. In
            extreme cases, it has even triggered wars. With such a
          </span>
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
