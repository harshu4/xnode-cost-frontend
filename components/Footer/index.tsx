/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-white px-[112.5px] pt-[36px]  pb-[57px] text-[#000000] md:px-[135px] md:pt-[43px] md:pb-[68px]  lg:px-[157px] lg:pt-[50px] lg:pb-[80px] xl:px-[180px] xl:pt-[58px] xl:pb-[91px] 2xl:px-[225px] 2xl:pt-[73px] 2xl:pb-[114px]"
      >
        <div className="flex justify-center gap-x-[112.5px] md:flex md:gap-x-[135px] lg:gap-x-[157px] xl:gap-x-[180px] 2xl:gap-x-[225px]">
          <div className="max-w-[615px]">
            <div className="text-[16px] font-bold md:text-[19.2px] lg:text-[22.5px] lg:!leading-[39px] xl:text-[25.5px] 2xl:text-[32px]">
              Openmesh
            </div>
            <div className="mt-[10px] text-[12px] font-normal md:mt-[12px] md:text-[14.5px] lg:mt-[14px] lg:text-[17px] lg:!leading-[29px] xl:text-[19px] 2xl:mt-[20px] 2xl:text-[24px]">
              Building open-source decentralized data infrastructure in Web2 and
              Web3 data
            </div>
            <div className="mt-[56px] text-[8px] font-normal   md:mt-[68px]  md:text-[9px] lg:mt-[80px] lg:text-[11px]  lg:!leading-[19px] xl:mt-[91px] xl:text-[13px] 2xl:mt-[114px] 2xl:text-[16px]">
              Openmesh, 2023
            </div>
          </div>
          <div className="flex gap-x-[15px] text-[9px] font-medium text-[#959595] md:gap-x-[18px] md:text-[10px] lg:gap-x-[21px] lg:text-[11px] lg:!leading-[150%] xl:gap-x-[24px] xl:text-[13px] 2xl:gap-x-[30px] 2xl:text-[16px]">
            <div className="max-w-[360px]">
              <span className="text-[#000]">Scalable</span> <br /> Xnode adapts
              to the growing needs of a project, making it a reliable solution
              throughout a project's lifecycle
            </div>
            <div className="max-w-[240px] text-[8px]  md:max-w-[220px] md:text-[10px] lg:mt-[78px] lg:text-[12px]  xl:text-[13px] 2xl:text-[16px]">
              <div className="mt-[8px] border-b-[1px] border-t-[1px] border-[#D9D9D9] pb-[8px]  lg:pt-[12px] lg:pb-[12px]  2xl:pt-[15px] 2xl:pb-[15px] ">
                <div className="pb-[8px] font-bold lg:pb-[12px] lg:leading-[19px] 2xl:pb-[15px]">
                  Suggest a new feature
                </div>
                <div className=" lg:!leading-[150%]">
                  <a className="border-b-[1px] font-medium text-[#0354EC]">
                    Join our community and let us know what you’d like to add!
                  </a>
                </div>
              </div>
              <div className="mt-[8px] pb-[8px] lg:mt-[12px] lg:pb-[12px] 2xl:mt-[15px] 2xl:pb-[15px]">
                <div className="pb-[8px] font-bold lg:pb-[12px] lg:leading-[19px] 2xl:pb-[15px]">
                  Encounter any issue?
                </div>
                <div className=" lg:!leading-[150%]">
                  {' '}
                  <a className="border-b-[1px] font-medium text-[#0354EC]">
                    Schedule a call with an Openmesh Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-b-[1px] text-[#D4D4D4]"></div>
    </>
  )
}

export default Hero
