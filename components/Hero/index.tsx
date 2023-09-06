const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[20px] pt-[100px] text-[#000000] lg:pt-[217px]"
      >
        <div className="mx-auto lg:w-[800px] xl:w-[1194px]">
          <img
            src={`${
              process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                ? process.env.NEXT_PUBLIC_BASE_PATH
                : ''
            }/images/hero/curvedLines.svg`}
            alt="image"
            className={`absolute -top-[150px] right-[20px]  z-[-1] md:-top-[500px] lg:-top-[550px]  xl:-top-[1000px] xl:right-[200px] `}
          />
          <div className="flex justify-center text-center text-[32px] font-bold lg:text-[48px] lg:!leading-[77px] xl:text-[64px]">
            OpenMesh Expert Network
          </div>
          <div className="mt-[15px] flex justify-center text-center text-[18px] font-medium lg:mt-[30px] lg:text-[24px] lg:!leading-[44px] xl:text-[36px]">
            Become a certified OpenMesh Expert to help businesses in
            implementing blockchain data solutions
          </div>
          <div className="mt-[31px] flex justify-center lg:mt-[62px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://calendly.com/`}
              className="w-[140px] cursor-pointer rounded-[5px] bg-[#0354EC] px-[18px] py-[9.5px] text-center text-[11px] font-bold text-white hover:bg-[#0447c5] lg:w-fit lg:text-[14px] lg:!leading-[19px] xl:py-[11.5px] xl:px-[35px] xl:text-[16px]"
            >
              Schedule a Call
            </a>
          </div>
        </div>
        <div className="mx-auto mt-[200px] lg:flex lg:w-[800px] lg:justify-between xl:mt-[400px] xl:w-[1177px]">
          <div className="text-center text-[24px] font-medium -tracking-[2%] lg:w-[489px] lg:text-start lg:text-[33px] lg:!leading-[58px] xl:text-[48px]">
            Openmesh Vision and Values
          </div>
          <div className="mt-[18px] text-[11px] font-medium -tracking-[2%] lg:mt-0 lg:w-[638px] lg:pl-[50px] lg:text-[14px] lg:!leading-[150%] xl:pl-0 xl:text-[20px]">
            <div>
              Openmesh is building a decentralized data infrastructure aimed at
              storing important global data without a middleman, starting with
              Web3 data.
            </div>
            <div className="mt-[18px] lg:mt-[37px]">
              Openmesh tools and stack are designed for developers to plan,
              design, deploy, and manage data infrastructure and data
              applications in minutes instead of weeks, and pay only for
              computing and storage, nothing else.
            </div>
            <div className="mt-[18px] font-bold lg:mt-[37px]">
              No license fees, no setup fees.
            </div>
            <div className="mt-[30px] lg:mt-[60px] lg:flex">
              <div className="lg:mr-[50px]">
                <div className="text-[12px] font-bold tracking-[2.2%] lg:text-[17px] xl:text-[24px]">
                  Open
                </div>
                <div className="mt-[8px] text-[#959595] lg:mt-[15px] lg:!leading-[24px]">
                  Openmesh is committed to democratize access to data for
                  everyone{' '}
                </div>
              </div>
              <div className="mt-[30px] lg:mt-0">
                <div className="text-[12px] font-bold tracking-[2.2%]  lg:text-[17px] xl:text-[24px]">
                  Transparent
                </div>
                <div className="mt-[8px] text-[#959595] lg:mt-[15px] lg:!leading-[24px]">
                  Development of Openmesh will always be open-source and
                  transparent
                </div>
              </div>
            </div>
            <div className="mt-[30px] lg:mt-[70px] lg:flex">
              <div className="lg:mr-[50px]">
                <div className="text-[12px] font-bold tracking-[2.2%]  lg:text-[17px] xl:text-[24px]">
                  Decentralized
                </div>
                <div className="mt-[8px] text-[#959595] lg:mt-[15px] lg:w-[180px] lg:!leading-[24px] xl:w-[294px]">
                  Decentralized designs limit single-entity dominance and reduce
                  single failure points
                </div>
              </div>
              <div className="mt-[30px] lg:mt-0">
                <div className="text-[12px] font-bold tracking-[2.2%] lg:text-[17px] xl:text-[24px]">
                  Secure
                </div>
                <div className="mt-[8px] text-[#959595] lg:mt-[15px] lg:!leading-[24px]">
                  Openmesh emphasizes on privacy, trust, and transparency by
                  design
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[58px] h-[1px] bg-[#D4D4D4] lg:mt-[116px]"></div>
    </>
  )
}

export default Hero
