import Image from 'next/image'

const Techs = () => {
  return (
    <section className="relative z-10 -mb-5 bg-white px-52">
      <>
        <div className="hidden px-10 md:block">
          <div className="grid grid-cols-1 bg-white md:grid-cols-3">
            <div className="flex w-full items-center justify-center text-center text-[#1E1E1E]">
              <div
                className="wow fadeInUp mx-auto rounded-md p-8 md:px-2 xl:px-8"
                data-wow-delay=".1s"
              >
                <Image
                  src="/images/techs/superNode.svg"
                  alt="logo"
                  width={100}
                  height={20}
                  className="mx-auto mb-2 w-64 transition-all duration-200 hover:z-20  hover:scale-110"
                />
                <Image
                  src="/images/techs/superNode.svg"
                  alt="logo"
                  width={100}
                  height={20}
                  className="mx-auto mb-2 mt-60 mr-7 w-64 transition-all duration-200 hover:z-20 hover:scale-110"
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-center text-center text-[#1E1E1E] ">
              <div
                className="wow fadeInUp mx-auto mt-1 flex w-full rounded-md p-8 md:px-2 xl:px-1"
                data-wow-delay=".1s"
              >
                <Image
                  src="/images/techs/l3a.svg"
                  alt="logo"
                  width={100}
                  height={20}
                  className="mx-auto mb-10 w-80 transition-all duration-200 hover:z-20 hover:scale-110 md:mb-20"
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-center text-center text-[#1E1E1E]">
              <div
                className="wow fadeInUp mx-auto rounded-md p-8 md:px-2 xl:px-8"
                data-wow-delay=".1s"
              >
                <Image
                  src="/images/techs/api.svg"
                  alt="logo"
                  width={100}
                  height={20}
                  className="mx-auto mb-2 w-28 transition-all duration-200 hover:z-20 hover:scale-110"
                />
                <Image
                  src="/images/techs/api.svg"
                  alt="logo"
                  width={100}
                  height={20}
                  className="mx-auto mt-60 mr-7 w-28 transition-all duration-200 hover:z-20 hover:scale-110"
                />
              </div>
            </div>
          </div>
          <Image
            src="/images/lines/CurvedLineFixed.svg"
            alt="logo"
            width={100}
            height={20}
            className="-mt-24 -ml-20 flex w-full  max-w-xl justify-center transition-all duration-200 hover:z-20 hover:scale-110 2xl:ml-64"
          />
        </div>
      </>
    </section>
  )
}

export default Techs
