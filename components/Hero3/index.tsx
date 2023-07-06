import Image from 'next/image'

const Hero3 = () => {
  return (
    <section className="relative z-10 bg-white px-96 pb-0 text-[#1E1E1E] md:pb-1">
      <div
        className="wow fadeInUp mx-auto items-center justify-center rounded-md p-8 text-center md:px-2 xl:px-8"
        data-wow-delay=".1s"
      >
        <Image
          src="/images/numbers/3.svg"
          alt="logo"
          width={100}
          height={20}
          className="w-1/10 mx-auto mb-2 transition-all duration-200 hover:z-20 hover:scale-110"
        />
        <p className="mx-auto mb-2 text-2xl font-bold  leading-relaxed md:text-xl xl:text-4xl">
          Information asymmetry, a result of this control, has given rise to
          social inequality, scandals, polarization, and corruption. In extreme
          cases, it has even triggered wars. With such a massive concentration
          of data and information, surveillance capitalism has begun to
          influence politics and culture profoundly
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
          className="mx-auto -mt-7 mb-10 w-1 md:mb-1"
        />
      </div>
    </section>
  )
}

export default Hero3
