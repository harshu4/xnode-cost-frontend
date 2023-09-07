const SuccessStories = () => {
  return (
    <>
      <section
        id="success"
        className="relative z-10 overflow-hidden bg-[#F3F3F3] px-[30px] pb-[55px] pt-[55px] text-[#000000] md:px-[90px]  md:pb-[79px] md:pt-[103px]"
      >
        <div className="md:flex ">
          <div className="pr-[40px] lg:pr-[90px] xl:pr-[170px]">
            <div className="text-[15px] font-bold -tracking-[2%] md:text-[21px] xl:text-[30px]">
              Success stories
            </div>
            <div className="mt-[10px] text-[14px] font-medium -tracking-[2%] text-[#505050] md:mt-[21px] md:text-[20px] lg:!leading-[34px] xl:max-w-[1076px] xl:text-[28px]">
              Find out how Openmesh Core Services have impacted organizations by
              making data infrastructure accessible
            </div>
          </div>
          <div className="mt-[20px] md:mt-0 xl:max-w-[360px]">
            <div className="h-[90px] max-w-[145px] rounded-[10px] bg-[#E6E6E6] xl:h-[133px] xl:max-w-[294px]"></div>
            <div className="mt-[10px] text-[16px] font-bold lg:mt-[20px] lg:text-[22px] lg:!leading-[150%] xl:text-[32px]">
              10Clouds{' '}
              <span className="font-medium text-[#959595]">using xNode</span>
            </div>
            <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] lg:!leading-[24px] xl:max-w-[294px] xl:text-[20px]">
              Hedge funds and algo-trading companies - Building a dynamic
              Knowledge Graph of DeFi data to facilitate real-time financial
              decisions
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SuccessStories
