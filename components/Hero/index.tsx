const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[20px] text-[#000000] lg:pt-[217px]"
      >
        <div className="mx-auto w-[1194px]">
          <div className="flex justify-center text-[64px] font-bold !leading-[77px]">
            OpenMesh Expert Network
          </div>
          <div className="mt-[30px]  flex justify-center text-center text-[36px] font-medium !leading-[44px]">
            Become a certified OpenMesh Expert to help businesses in
            implementing blockchain data solutions
          </div>
          <div className="mt-[62px] flex justify-center text-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://calendly.com/`}
              className="cursor-pointer rounded-[5px] bg-[#0354EC] py-[11.5px] px-[35px] text-[16px] font-bold !leading-[19px] text-white hover:bg-[#0447c5]"
            >
              Schedule a Call
            </a>
          </div>
        </div>
        <div className="mx-auto mt-[400px] flex w-[1177px] justify-between">
          <div className="w-[489px] text-[48px] font-medium !leading-[58px] -tracking-[2%]">
            Openmesh Vision and Values
          </div>
          <div className="w-[638px] text-[20px] font-medium !leading-[150%] -tracking-[2%]">
            <div>
              Openmesh is building a decentralized data infrastructure aimed at
              storing important global data without a middleman, starting with
              Web3 data.
            </div>
            <div className="mt-[37px]">
              Openmesh tools and stack are designed for developers to plan,
              design, deploy, and manage data infrastructure and data
              applications in minutes instead of weeks, and pay only for
              computing and storage, nothing else.
            </div>
            <div className="mt-[37px] font-bold">
              No license fees, no setup fees.
            </div>
            <div className="mt-[60px] flex">
              <div className="mr-[50px]">
                <div className="text-[24px] font-bold tracking-[2.2%]">
                  Open
                </div>
                <div className="mt-[15px] !leading-[24px] text-[#959595]">
                  Openmesh is committed to democratize access to data
                </div>
              </div>
              <div>
                <div className="text-[24px] font-bold tracking-[2.2%]">
                  Transparent
                </div>
                <div className="mt-[15px] !leading-[24px] text-[#959595]">
                  Openmesh is committed to democratize access to data
                </div>
              </div>
            </div>
            <div className="mt-[70px] flex">
              <div className="mr-[50px]">
                <div className="text-[24px] font-bold tracking-[2.2%]">
                  Decentralized
                </div>
                <div className="mt-[15px] !leading-[24px] text-[#959595]">
                  Openmesh is committed to democratize access to data
                </div>
              </div>
              <div>
                <div className="text-[24px] font-bold tracking-[2.2%]">
                  Growth-centric
                </div>
                <div className="mt-[15px] !leading-[24px] text-[#959595]">
                  Openmesh is committed to democratize access to data
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[116px] h-[1px] bg-[#D4D4D4]"></div>
    </>
  )
}

export default Hero
