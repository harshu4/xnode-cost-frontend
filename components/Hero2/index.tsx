const Hero2 = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[20px] text-[#000000] lg:pt-[313px]"
      >
        <div className="mx-auto w-[1000px]">
          <div className="flex justify-center text-[48px] font-bold !leading-[150%] -tracking-[2.2%]">
            Why choose OpenMesh?
          </div>
          <div className="mt-[30px] flex justify-center text-center text-[28px] font-medium !leading-[44px] -tracking-[2%]">
            OpenMesh is the leading open-source data protocol that helps
            individuals and businesses to access on-chain and off-chain data
            seamlessly through our 3 core services:
          </div>
          <div className="mx-auto mt-[91px] grid grid-cols-3 items-center justify-center gap-x-[60px]">
            <div className=" w-[294px]">
              <div className="h-[342px] rounded-[10px] bg-[#F3F3F3]"></div>
              <div className="mt-[20px] text-[32px] font-bold !leading-[150%]">
                xNode <span className="font-medium text-[#959595]">(IaaS)</span>
              </div>
              <div className="mt-[20px] text-[20px] font-medium">
                Tool to create a fully functional full-stack data infrastructure
                from scratch on bare metal servers
              </div>
            </div>
            <div className=" w-[294px]">
              <div className="h-[342px] rounded-[10px] bg-[#F3F3F3]"></div>
              <div className="mt-[20px] text-[32px] font-bold !leading-[150%]">
                UnifiedAPI{' '}
                <span className="font-medium text-[#959595]">(PaaS)</span>
              </div>
              <div className="mt-[20px] text-[20px] font-medium">
                Tool to create a fully functional full-stack data infrastructure
                from scratch on bare metal servers
              </div>
            </div>
            <div className=" w-[294px]">
              <div className="h-[342px] rounded-[10px] bg-[#F3F3F3]"></div>
              <div className="mt-[20px] text-[32px] font-bold !leading-[150%]">
                Pythia{' '}
                <span className="font-medium text-[#959595]">(SaaS)</span>
              </div>
              <div className="mt-[20px] text-[20px] font-medium">
                Tool to create a fully functional full-stack data infrastructure
                from scratch on bare metal servers
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero2
