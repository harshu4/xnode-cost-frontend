const Hero2 = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[20px] pt-[48px] text-[#000000] lg:pt-[97px]"
      >
        <div className="mx-auto lg:w-[1000px]">
          <div className="flex justify-center text-[22px] font-bold -tracking-[2.2%] lg:text-[48px] lg:!leading-[150%]">
            Why choose OpenMesh?
          </div>
          <div className="mt-[15px] flex justify-center text-[14px] font-medium -tracking-[2%] lg:mt-[30px] lg:text-center lg:text-[28px] lg:!leading-[44px]">
            Openmesh is the leading open-source data protocol that helps
            individuals and businesses to access on-chain and off-chain data
            seamlessly through our 3 core services:
          </div>
          <div className="mx-auto mt-[45px] items-center justify-center lg:mt-[91px] lg:grid lg:grid-cols-3 lg:gap-x-[60px]">
            <div className="lg:w-[294px]">
              <div className="h-[170px] w-[145px] rounded-[10px]  bg-[#F3F3F3] lg:h-[342px] lg:w-[294px]"></div>
              <div className="mt-[10px] text-[16px] font-bold lg:mt-[20px] lg:text-[32px] lg:!leading-[150%]">
                xNode <span className="font-medium text-[#959595]">(IaaS)</span>
              </div>
              <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[20px]">
                Tool to create a fully functional full-stack data infrastructure
                from scratch on bare metal servers
              </div>
              <div className="mt-[10px] flex text-center lg:mt-[20px]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://calendly.com/`}
                  className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[18px] py-[9.5px]  text-[10px] font-bold text-white hover:bg-[#0447c5] lg:py-[11.5px] lg:px-[35px] lg:text-[16px] lg:!leading-[19px]"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="mt-[45px] lg:mt-0 lg:w-[294px]">
              <div className="h-[170px] w-[145px] rounded-[10px]  bg-[#F3F3F3] lg:h-[342px] lg:w-[294px]"></div>
              <div className="mt-[10px] text-[16px] font-bold lg:mt-[20px] lg:text-[32px] lg:!leading-[150%]">
                UnifiedAPI{' '}
                <span className="font-medium text-[#959595]">(PaaS)</span>
              </div>
              <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[20px]">
                A single endpoint for all crypto and Web3 data, along with REST
                APIs for historical data as a service
              </div>
              <div className="mt-[10px] flex text-center lg:mt-[20px]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://calendly.com/`}
                  className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[18px] py-[9.5px]  text-[10px] font-bold text-white hover:bg-[#0447c5] lg:py-[11.5px] lg:px-[35px] lg:text-[16px] lg:!leading-[19px]"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="mt-[45px] lg:mt-0 lg:w-[294px]">
              <div className="h-[170px] w-[145px] rounded-[10px]  bg-[#F3F3F3] lg:h-[342px] lg:w-[294px]"></div>
              <div className="mt-[10px] text-[16px] font-bold lg:mt-[20px] lg:text-[32px] lg:!leading-[150%]">
                Pythia{' '}
                <span className="font-medium text-[#959595]">(SaaS)</span>
              </div>
              <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[20px]">
                Allows users to search, design, build, and store their own
                crypto and Web3 data directly within their wallet
              </div>
              <div className="mt-[10px] flex text-center lg:mt-[20px]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://calendly.com/`}
                  className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[18px] py-[9.5px]  text-[10px] font-bold text-white hover:bg-[#0447c5] lg:py-[11.5px] lg:px-[35px] lg:text-[16px] lg:!leading-[19px]"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[41px] h-[1px] bg-[#D4D4D4] lg:mt-[82px]"></div>
    </>
  )
}

export default Hero2
