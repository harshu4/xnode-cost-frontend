const Hero3 = () => {
  return (
    <>
      <div className="pt-[80px]"></div>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[20px] text-[#000000] lg:pt-[195px]"
      >
        <div className="mx-auto min-w-[720px]">
          <div className="mx-auto min-w-[720px]">
            <img
              src="/images/hero3/manTwo.png"
              alt="image"
              className={`absolute top-0 left-[2px] right-0 z-[-1] m-auto min-w-[730px]`}
            />
            <div className="flex justify-center text-[64px] font-bold tracking-[2.2%]">
              Becomin
              <span className="mr-[14px] text-white">
                g an Openmesh Expert
              </span>{' '}
              Network
            </div>
          </div>
          <div className="mx-auto  mt-[301px] grid w-[1250px] grid-cols-3 items-start justify-center gap-x-[120px] gap-y-[146px]">
            <div className="w-[320px] ">
              <div className="text-[24px] font-bold !leading-[150%] tracking-[2.2%]">
                Cost, speed, and scale
              </div>
              <div className="mt-[15px] w-[294px] text-[20px] font-medium text-[#959595]">
                Deploy, and manage data infrastructure and data applications in
                minutes instead of months
              </div>
            </div>
            <div className="w-[320px]">
              <div className="text-[24px] font-bold !leading-[150%] tracking-[2.2%]">
                One-stop for all your needs
              </div>
              <div className="mt-[15px] w-[294px] text-[20px] font-medium text-[#959595]">
                Infrastructure deployment and management tools, APIs, data
                connectivity, analytics, access to data all in one place
              </div>
            </div>
            <div className="w-[320px] ">
              <div className="text-[24px] font-bold !leading-[150%] tracking-[2.2%]">
                Extreme flexibility and customization
              </div>
              <div className="mt-[15px] w-[294px] text-[20px] font-medium text-[#959595]">
                All Openmesh stack is open source. You’ll have full freedom for
                customization with the Openmesh Open License (OOL)
              </div>
            </div>
            <div className="w-[320px]">
              <div className="text-[24px] font-bold !leading-[150%] tracking-[2.2%]">
                Fast-growing ecosystem
              </div>
              <div className="mt-[15px] w-[294px] text-[20px] font-medium text-[#959595]">
                Fueled by active community contribution, Openmesh ecosystem is
                growing at unprecedented pace
              </div>
            </div>
            <div className="w-[320px]">
              <div className="text-[24px] font-bold !leading-[150%] tracking-[2.2%]">
                Growth-centric
              </div>
              <div className="mt-[15px] w-[294px] text-[20px] font-medium text-[#959595]">
                Openmesh is committed to democratize access to data
              </div>
            </div>
            <div className="w-[320px]">
              <div className="text-[24px] font-bold !leading-[150%] tracking-[2.2%]">
                Badge staking opportunity
              </div>
              <div className="mt-[15px] w-[294px] text-[20px] font-medium text-[#959595]">
                Openmesh is committed to democratize access to data
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-[107px] flex h-[1px] w-[900px] bg-[#D4D4D4]"></div>
      </section>
    </>
  )
}

export default Hero3
